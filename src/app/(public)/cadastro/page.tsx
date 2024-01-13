import getPlains from "@/app/(public)/planos/services/getPlains";
import LandingPlainCard from "@/components/Landing/Plains/CardPlain";

export default async function PlanosPage() {
  const {data} = await getPlains();
  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">Nossos Planos</h2>
        </div>
        <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
            {data.map((plain:any)=> (
              <LandingPlainCard key={plain.id} data={plain}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
