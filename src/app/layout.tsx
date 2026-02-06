import './globals.css';

export const metadata = {
  title: 'DLAXMI INFOTECH LLP',
  description: 'Research-driven R&D Innovation Lab',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
