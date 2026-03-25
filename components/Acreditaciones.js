const acreditaciones = [
  {
    nombre: 'PEMEX SSPA',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pemex_logo.svg/200px-Pemex_logo.svg.png',
  },
  {
    nombre: 'CONOCER',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Conocer.svg/200px-Conocer.svg.png',
  },
  {
    nombre: 'IADC RigPass',
    img: 'https://www.iadc.org/wp-content/uploads/2021/03/iadc-logo-web.png',
  },
  {
    nombre: 'STPS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Escudo_de_la_Secretar%C3%ADa_del_Trabajo_y_Previsi%C3%B3n_Social_%28M%C3%A9xico%29.svg/150px-Escudo_de_la_Secretar%C3%ADa_del_Trabajo_y_Previsi%C3%B3n_Social_%28M%C3%A9xico%29.svg.png',
  },
  {
    nombre: 'IPCET Tabasco',
    img: 'https://ipcet.tabasco.gob.mx/images/logo-ipcet.png',
  },
  {
    nombre: 'National Safety Council',
    img: 'https://www.nsc.org/getmedia/4b0c1e3a-2c3a-4a3a-8c3a-4c3a8c3a4c3a/nsc-logo.png',
  },
]

export default function Acreditaciones() {
  const all = [...acreditaciones, ...acreditaciones, ...acreditaciones]
  return (
    <div className="bg-white border-y border-gray-100 py-8 overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
        Acreditaciones y Membresías
      </p>
      <div className="flex gap-16 animate-marquee w-max items-center">
        {all.map((item, i) => (
          <div key={i}
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all hover:scale-110 cursor-default">
            <img
              src={item.img}
              alt={item.nombre}
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.querySelector('span').style.display = 'block'
              }}
            />
            <span
              className="text-[#1a2744] font-black text-sm whitespace-nowrap"
              style={{display: 'none'}}>
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
