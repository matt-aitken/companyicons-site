import '#/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Company Icons by Trigger.dev',
    template: '%s | By Trigger.dev',
  },
  description:
    'Easily render Company icons in your React app. Made by Trigger.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll bg-slate-900 ">{children}</body>
    </html>
  );
}
