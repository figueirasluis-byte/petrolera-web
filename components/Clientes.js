const clientes = [
  'PEMEX', 'Halliburton', 'SLB', 'NOV', 'EnerMech',
  'QMAX', 'SGS', 'Wireline Co.', 'Lion Oilfield', 'MC Wellservices',
  'Syatec Oil & Gas', 'SVF Energy', 'Propesa', 'PPI', 'Hasue',
]

export default function Clientes() {
  const all = [...clientes, ...clientes]
  return (
    <div className="bg-white overflow-hidden py-12" style={{borderTop: '1px solid #d1fae5'}}>
      <p className="text-center text-xs font-bold tracking-widest uppercase mb-8" style={{color: '#4b7a5e'}}>
        Confían en nuestra experiencia
      </p>
      <div className="flex gap-16 animate-marquee-slow w-max items-center">
        {all.map((c, i) => (
          <span key={i}
            className="font-black text-2xl whitespace-nowrap tracking-widest cursor-default transition-colors hover:text-green-500"
            style={{color: '#d1fae5'}}>
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
