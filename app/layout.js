import './globals.css'

export const metadata = {
  title: 'GREEN PRO — Consultoría Ambiental y Capacitación SSPA',
  description: 'Cursos SSPA, Rig Pass, Protección Ambiental, Normas STPS y más. Villahermosa, Tabasco.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
