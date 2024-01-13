interface iPlain {
  id: string;
  name: string;
  price: number
  attributes: string
}
export default function LandingPlainCard({data}:{data:iPlain} ) {
    console.log(data)
  const attrs = data.attributes.split(";");
  return (
    <>
      <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
        <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">{data.name}</span>
        <h3>
          <span className="text-xl font-medium text-black dark:text-white">R$ </span>
          <span className="text-title-xxl2 font-bold text-black dark:text-white">{data.price.toLocaleString('pt-br',{minimumFractionDigits: 2})}</span>
          <span className="font-medium">/mês</span>
        </h3>
        <h4 className="mt-7.5 mb-5 text-lg font-medium text-black dark:text-white">Características</h4>
        <ul className="flex flex-col gap-3.5">
          {attrs.map((attr:any, index:number)=>(
            <li key={index} className="font-medium">{attr}</li>
          ))}
        </ul>
        <button className="mt-9 flex rounded-md border border-primary py-3 px-9 font-medium text-primary hover:bg-primary hover:text-white">Contratar agora</button>
      </div>
    </>
  )
}
