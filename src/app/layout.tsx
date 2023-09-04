import './globals.css'

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gian UI',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
            <Sidebar />
            <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
