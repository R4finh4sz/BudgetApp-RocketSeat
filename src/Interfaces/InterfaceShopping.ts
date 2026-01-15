export type ShoppingItem = {
  id: string;
  name: string;
  completed: boolean;
};

export type FilterType = 'pending' | 'completed';

export const STORAGE_KEYS = {
  SHOPPING_ITEMS: '@shopping:items',
} as const;
