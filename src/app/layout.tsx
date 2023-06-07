import './globals.css';

export const metadata = {
  title: 'Axel Gonzalez Dev',
  description: 'Axel Gonzalez Portfolio',
}

/* Importing components */
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
