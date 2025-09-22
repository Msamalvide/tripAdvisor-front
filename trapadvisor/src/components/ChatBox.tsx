"use client";
import React from "react";
import Encabezado from "./Encabezado";
import FormChat from "./FormChat";
import Mensaje from "./Mensaje";

export default function ChatBox() {

    const [chatHistory, setChatHistory] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);

    async function handleSendMessage (mensaje: string) {

        setChatHistory(prev => [...prev, mensaje]);
        setIsLoading(true);

        try{
        //Codigo
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }

    }


    

  return (
    <div className=" bg-white rounded-lg sm:rounded-xl shadow-lg min-h-screen flex flex-col items-center justify-between text-center w-full max-w-full sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
        <section className="w-full rounded-lg sm:rounded-xl">
            <Encabezado />
        </section>

        <section className="text-align:left sm:text-xl w-full flex-1 overflow-y-auto p-2 sm:p-4">

            <Mensaje
                isAi={true}
                mensaje="Hola! Soy TripAdvisor, tu asistente de Analisis. ¿En qué puedo ayudarte hoy?"
            />

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

              <div ref={messagesEndRef} />
        </section>

        <section className="w-full h-16 sm:h-20 md:h-24">
            <div className="flex items-center justify-center w-full h-full ">
                <FormChat
                    setChat={(mensaje)=>handleSendMessage(mensaje)}
                />
            </div>
        </section>
    </div>
  );
}
