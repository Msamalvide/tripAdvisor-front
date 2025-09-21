import { Loader2, MessageSquareCode, UserRound } from "lucide-react";

type Props = {
    isAi: boolean;
    mensaje: string;
    isLoading?:boolean;
};

export default function Mensaje({isAi,mensaje,isLoading=false}: Props) {
  return (
    <div className={`flex w-full gap-2 p-2 pt-3 h-fit ${!isAi && `flex-row-reverse` }  ${isLoading && `animate-pulse` }`}>
        <div className={`flex gap-4 text-gray-700 h-full items-center` }>
            {isAi? <MessageSquareCode className="h-9 w-9 "/> : <UserRound className="h-9 w-9"/>}
        </div>

        <div className={`rounded-lg p-2 ${!isAi && `bg-[#229C92] h-fit text-[#FFFFFF]` } ${isAi && `bg-[#BCE5E2] h-fit text-[#484d4e]` }`}>
            {
                isLoading? 
                    <Loader2 className="animate-spin"/> 
                :
                    <p>
                        {mensaje}
                    </p>
            }
            
        </div>
    </div>
  );
}