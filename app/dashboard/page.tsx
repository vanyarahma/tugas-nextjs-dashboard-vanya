import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
};
export default function DashboardPage() {
  redirect('/dashboard/overview');
}
