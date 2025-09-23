import { ChartNoAxesCombined, Trash2 } from "lucide-react"

type Props = {
    onClear?: () => void;
};

export default function Encabezado({onClear}: Props) {
  return (
    <div className="rounded-t-lg sm:rounded-t-xl bg-gradient-to-r from-[#284947] to-[#60AFA9] h-[8rem] w-full flex items-center justify-between text-white font-bold">

      <div className="h-fit w-[40%] ml-10">
        <ChartNoAxesCombined className="h-fit w-20"/>
      </div>

      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl md:text-5xl text-center">TripAdvisor</h1>
      </div>

      {onClear && (
        <div className="h-fit mr-10">
          <button onClick={onClear} className="p-2 hover:bg-white/10 rounded">
            <Trash2 className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
