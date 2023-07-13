import './globals.css'

export const metadata = {
  title: 'Desenhador',
  description: 'Frontend para api Dall-e 2 da openai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex justify-center bg-gunmetal-500'>{children}</body>
    </html>
  )
}
