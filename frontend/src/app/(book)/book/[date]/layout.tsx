import type { Metadata } from 'next';
import { BackButton, Header, NavBar } from '@/components';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function BookListLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { date: string };
}>) {
  return (
    <>
      <Header>
        <BackButton label={params.date && decodeURIComponent(params.date)} />
      </Header>
      <div>{children}</div>
    </>
  );
}