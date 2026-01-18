export type BudgetStatus = 'draft' | 'sent' | 'approved' | 'rejected';
export type SortOption = 'recent' | 'oldest' | 'highest' | 'lowest';

export type BudgetItem = {
  id: string;
  title: string;
  client: string;
  amount: number;
  status: BudgetStatus;
  createdAt: string;
};
