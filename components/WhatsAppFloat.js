import { getWhatsAppLink } from '../utils/whatsapp'

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink("Hola, me interesa información sobre sus servicios")}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 rounded-full shadow-lg shadow-green-200 animate-wa transition-colors"
      aria-label="WhatsApp">
      <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white flex-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.025 7.773L0 32l8.48-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.09 22.09c-.334.94-1.957 1.793-2.69 1.857-.688.062-1.334.308-4.5-1.004-3.79-1.577-6.22-5.44-6.41-5.695-.188-.254-1.528-2.03-1.528-3.873s.973-2.75 1.325-3.127c.352-.376.77-.47 1.027-.47.257 0 .513.002.74.014.237.012.556-.09.87.664.322.773 1.09 2.672 1.186 2.865.097.194.162.42.032.676-.13.256-.195.415-.387.637-.193.222-.407.495-.581.665-.194.19-.396.396-.17.775.224.38 1 1.617 2.143 2.62 1.472 1.294 2.715 1.694 3.094 1.887.38.194.6.162.82-.097.22-.26.94-1.097 1.19-1.474.25-.378.5-.316.84-.19.34.128 2.158 1.018 2.527 1.203.37.186.615.278.705.433.09.154.09.894-.244 1.833z"/>
      </svg>
      <span className="text-sm font-medium">¿Tienes dudas? Escríbenos</span>
    </a>
  )
}
