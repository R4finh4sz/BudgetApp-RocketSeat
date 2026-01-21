import {z} from 'zod';

export const budgetGeneralInfoSchema = z.object({
  title: z
    .string()
    .min(1, {message: 'O título do orçamento é obrigatório'})
    .trim(),
  client: z
    .string()
    .min(1, {message: 'O nome do cliente é obrigatório'})
    .trim(),
});

export const serviceSchema = z.object({
  title: z.string().min(1, {message: 'O título do serviço é obrigatório'}),
  description: z.string().optional(),
  amount: z.number().min(0, {message: 'O valor deve ser maior que zero'}),
  quantity: z.number().min(1, {message: 'A quantidade mínima é 1'}),
});

export type BudgetGeneralInfo = z.infer<typeof budgetGeneralInfoSchema>;
export type ServiceData = z.infer<typeof serviceSchema>;
