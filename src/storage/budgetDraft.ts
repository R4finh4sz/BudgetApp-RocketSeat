import AsyncStorage from '@react-native-async-storage/async-storage';
import {BudgetStatus} from '@/src/Interfaces/HomeInterfaces';

const STORAGE_KEY = '@budget:draft';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  amount: number;
  quantity: number;
};

export type BudgetDraft = {
  title: string;
  client: string;
  status: BudgetStatus;
  services: ServiceItem[];
  discountPercent: number;
  discountAmount: number;
  updatedAt: string;
};

export async function saveBudgetDraft(draft: BudgetDraft) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

export async function loadBudgetDraft() {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  return JSON.parse(raw) as BudgetDraft;
}

export async function clearBudgetDraft() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
