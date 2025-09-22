import { ChartNoAxesCombined } from "lucide-react"

export default function Encabezado() {
  return (
    <div className="rounded-t-lg sm:rounded-t-xl bg-gradient-to-r from-[#284947] to-[#60AFA9] h-[8rem] w-full flex items-center justify-between text-white font-bold gap-96">

      <div className="h-fit w-[40%] ml-10">
        <ChartNoAxesCombined className="h-fit w-20"/>
      </div>

      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl md:text-5xl text-center">TripAdvisor</h1>
      </div>  
    </div>
  );  
}
