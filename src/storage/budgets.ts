import AsyncStorage from '@react-native-async-storage/async-storage';
import {BudgetStatus} from '@/src/Interfaces/HomeInterfaces';

const STORAGE_KEY = '@budget:items';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  amount: number;
  quantity: number;
};

export type BudgetRecord = {
  id: string;
  title: string;
  client: string;
  status: BudgetStatus;
  services: ServiceItem[];
  discountPercent: number;
  discountAmount: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export async function getBudgets() {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return [] as BudgetRecord[];
  return JSON.parse(raw) as BudgetRecord[];
}

export async function saveBudget(budget: BudgetRecord) {
  const current = await getBudgets();
  const next = [budget, ...current];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return budget;
}
