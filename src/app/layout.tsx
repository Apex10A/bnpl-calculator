// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Loan Calculator - Buy Now Pay Later',
  description: 'Calculate your monthly repayments for Buy Now Pay Later plans',
  keywords: 'loan calculator, buy now pay later, BNPL, installment calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}