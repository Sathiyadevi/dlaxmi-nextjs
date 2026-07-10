import './globals.css';
import Navbar from '@/components/hero/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
