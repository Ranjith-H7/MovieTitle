import './globals.css';

export const metadata = {
  title: 'My Blog App',
  description: 'Created with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
