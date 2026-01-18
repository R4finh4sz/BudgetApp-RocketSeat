import { BudgetItem } from '../../../Interfaces/HomeInterfaces';

export const BUDGETS: BudgetItem[] = [
  {
    id: '1',
    title: 'Desenvolvimento de aplicativo de loja online',
    client: 'Soluções Tecnológicas Beta',
    amount: 22300,
    status: 'approved',
    createdAt: '2024-12-08',
  },
  {
    id: '2',
    title: 'Consultoria em marketing digital',
    client: 'Marketing Wizards',
    amount: 4000,
    status: 'draft',
    createdAt: '2024-12-04',
  },
  {
    id: '3',
    title: 'Serviços de SEO',
    client: 'SEO Masters',
    amount: 3500,
    status: 'sent',
    createdAt: '2024-12-03',
  },
  {
    id: '4',
    title: 'Criação de conteúdo',
    client: 'Content Creators',
    amount: 2500,
    status: 'draft',
    createdAt: '2024-12-01',
  },
  {
    id: '5',
    title: 'Gestão de redes sociais',
    client: 'Social Experts',
    amount: 1800,
    status: 'rejected',
    createdAt: '2024-11-28',
  },
  {
    id: '6',
    title: 'Design de interface',
    client: 'UI/UX Designers',
    amount: 5200,
    status: 'approved',
    createdAt: '2024-11-26',
  },
];
