import theme from '../Global/theme';
import { BudgetStatus, SortOption } from '../Interfaces/HomeInterfaces';

export const STATUS_CONFIG: Record<BudgetStatus, { label: string; color: string; background: string }> = {
  draft: {
    label: 'Rascunho',
    color: theme.COLORS.GRAY_500,
    background: theme.COLORS.GRAY_300,
  },
  sent: {
    label: 'Enviado',
    color: theme.COLORS.INFO_BASE,
    background: theme.COLORS.INFO_LIGHT,
  },
  approved: {
    label: 'Aprovado',
    color: theme.COLORS.SUCCESS_BASE,
    background: theme.COLORS.SUCCESS_LIGHT,
  },
  rejected: {
    label: 'Recusado',
    color: theme.COLORS.DANGER_BASE,
    background: theme.COLORS.DANGER_LIGHT,
  },
};

export const statusOrder: BudgetStatus[] = ['draft', 'sent', 'approved', 'rejected'];

export const statusOptions = statusOrder.map((key) => ({
  key,
  ...STATUS_CONFIG[key],
}));

export const sortOptions: { key: SortOption; label: string }[] = [
  { key: 'recent', label: 'Mais recente' },
  { key: 'oldest', label: 'Mais antigo' },
  { key: 'highest', label: 'Maior valor' },
  { key: 'lowest', label: 'Menor valor' },
];
