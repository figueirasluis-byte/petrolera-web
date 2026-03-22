import './globals.css'

export const metadata = {
  title: 'Delta Oil Services — Capacitación Industrial Petrolera',
  description: 'Cursos SSPA, Rig Pass, Wellsharp, inspección de grúas y más en Villahermosa, Tabasco.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
