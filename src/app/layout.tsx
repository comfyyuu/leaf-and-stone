import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leaf & Stone | ナチュラルエステティックサロン',
  description: '大地の恵みと植物の力。心と身体を本来の健やかさへと導く、ナチュラル素材にこだわったエステティックサロン。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
