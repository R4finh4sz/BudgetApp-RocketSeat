import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@budgets';

export type BudgetStatus = 'draft' | 'approved' | 'sent' | 'rejected';

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  amount: number;
  quantity: number;
};

export type BudgetStored = {
  id: string;
  title: string;
  client: string;
  status: BudgetStatus;
  services: ServiceItem[];
  discountPercent?: number;
  discountAmount?: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export async function getBudgets(): Promise<BudgetStored[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as BudgetStored[]) : [];
}

export async function saveBudget(budget: BudgetStored): Promise<void> {
  const all = await getBudgets();
  const next = [budget, ...all];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}

export async function updateBudget(updated: BudgetStored): Promise<void> {
  const all = await getBudgets();
  const next = all.map(b =>
    String(b.id) === String(updated.id) ? updated : b,
  );
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}

export async function deleteBudget(id: string): Promise<void> {
  const all = await getBudgets();
  const next = all.filter(b => String(b.id) !== String(id));
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}

export async function duplicateBudget(
  id: string,
): Promise<BudgetStored | null> {
  const all = await getBudgets();
  const original = all.find(b => String(b.id) === String(id));
  if (!original) return null;

  const now = new Date().toISOString();
  const copy: BudgetStored = {
    ...original,
    id: String(Date.now()),
    title: `${original.title} (cópia)`,
    createdAt: now,
    updatedAt: now,
  };

  const next = [copy, ...all];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return copy;
}
