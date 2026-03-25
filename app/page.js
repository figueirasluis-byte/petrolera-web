import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Acreditaciones from '../components/Acreditaciones'
import Calendario from '../components/Calendario'
import Promociones from '../components/Promociones'
import CursosGreenPro from '../components/CursosGreenPro'
import Inspeccion from '../components/Inspeccion'
import Conocer from '../components/Conocer'
import Consultoria from '../components/Consultoria'
import Renta from '../components/Renta'
import Cotizacion from '../components/Cotizacion'
import Clientes from '../components/Clientes'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Acreditaciones />
      <Calendario />
      <Promociones />
      <CursosGreenPro />
      <Inspeccion />
      <Conocer />
      <Consultoria />
      <Renta />
      <Cotizacion />
      <Clientes />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
