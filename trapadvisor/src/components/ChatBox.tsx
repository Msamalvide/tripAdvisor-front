"use client";
import React from "react";
import Encabezado from "./Encabezado";
import FormChat from "./FormChat";
import Mensaje from "./Mensaje";

export default function ChatBox() {

    const [chatHistory, setChatHistory] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    async function handleSendMessage (mensaje: string) {

        setChatHistory(prev => [...prev, mensaje]);
        setIsLoading(prev=>!prev);

        try{
        //Codigo
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }

    }


    

  return (
    <div className=" border-4 border-amber-400 rounded-xl shadow-lg min-h-screen flex flex-col items-center justify-between text-center">
        <section>
            <Encabezado />
        </section>

        <section className="text-xl font-bold border-2 border-amber-900 w-full flex-1 overflow-y-auto">

            {chatHistory.map((mensaje, index) => (
                <Mensaje
                    key={index}
                    mensaje={mensaje}
                    isAi={false}
                />
            ))}

            {
                isLoading && (
                    <Mensaje
                        mensaje=""
                        isAi={true}
                        isLoading={true}
                    />
                )
            }
        </section>

        <section  className="text-xl font-bold border-2 border-b-fuchsia-600 w-full h-[10vw]">
            <div className="flex items-center justify-center h-full">
                <FormChat 
                    setChat={(mensaje)=>handleSendMessage(mensaje)}
                />
            </div>
        </section>
    </div>
  );
}
