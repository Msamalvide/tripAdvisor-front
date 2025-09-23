import { Loader2, MessageSquareCode, UserRound } from "lucide-react";

type Props = {
    isAi: boolean;
    mensaje: string;
    isLoading?:boolean;
    timestamp?: Date;
};

export default function Mensaje({isAi,mensaje,isLoading=false, timestamp}: Props) {

    if(!mensaje && !isLoading){
        return null;
    }

  return (
    <div className={`text-align:left flex w-full gap-1 sm:gap-2 p-1 pt-2 sm:p-2 sm:pt-3 h-fit font-normal ${!isAi ? 'flex-row-reverse' : ''} ${isLoading ? 'animate-pulse' : ''}`}>
        <div className={`flex gap-2 sm:gap-4 text-gray-700 h-full items-center` }>
            {isAi ? <MessageSquareCode className="h-6 w-6 sm:h-9 sm:w-9" aria-label="AI message" /> : <UserRound className="h-6 w-6 sm:h-9 sm:w-9" aria-label="User message" />}
        </div>

        <div className={` text-align:left rounded-lg p-1 sm:p-2 h-fit break-words max-w-[90%] sm:max-w-[80%] ${!isAi ? 'bg-[#229C92] text-[#FFFFFF]' : 'bg-[#BCE5E2] text-[#484d4e]'}`}>
            {
                isLoading?
                    <div className="flex items-center gap-2">
                        <Loader2 className="animate-spin h-4 w-4"/>
                        <p className="text-sm">TripAdvisor está escribiendo...</p>
                    </div>
                :
                    <p className="break-words text-align:left">
                        {mensaje}
                    </p>
            }
            {timestamp && !isLoading && (
                <p className="text-xs text-gray-500 mt-1">
                    {timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
            )}

        </div>
    </div>
  );
}