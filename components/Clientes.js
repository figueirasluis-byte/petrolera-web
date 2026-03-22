const clientes = [
  'PEMEX', 'Halliburton', 'SLB', 'NOV', 'EnerMech',
  'QMAX', 'SGS', 'Wireline Co.', 'Lion Oilfield', 'MC Wellservices',
  'Syatec Oil & Gas', 'SVF Energy', 'Propesa', 'PPI', 'Hasue',
]

export default function Clientes() {
  const all = [...clientes, ...clientes]
  return (
    <div className="bg-white border-t border-gray-100 py-12 overflow-hidden">
      <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">
        Confían en nuestra experiencia
      </p>
      <div className="flex gap-16 animate-marquee-slow w-max items-center">
        {all.map((c, i) => (
          <span key={i}
            className="font-black text-2xl text-gray-200 hover:text-orange-500 transition-colors cursor-default whitespace-nowrap tracking-widest">
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
