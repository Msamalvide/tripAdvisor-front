"use client";
import React from "react";
import Encabezado from "./Encabezado";
import FormChat from "./FormChat";
import Mensaje from "./Mensaje";

export default function ChatBox() {

    const [chatHistory, setChatHistory] = React.useState<{message: string, timestamp: Date, isAi: boolean}[]>([
        {message: "Hola! Soy TripAdvisor, tu asistente de Analisis. ¿En qué puedo ayudarte hoy?", timestamp: new Date(), isAi: true}
    ]);
    const [isLoading, setIsLoading] = React.useState(false);
    const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);

    const handleClearChat = () => {
        setChatHistory([{message: "Hola! Soy TripAdvisor, tu asistente de Analisis. ¿En qué puedo ayudarte hoy?", timestamp: new Date(), isAi: true}]);
    };

    async function handleSendMessage (mensaje: string) {

        setChatHistory(prev => [...prev, {message: mensaje, timestamp: new Date(), isAi: false}]);
        setIsLoading(true);

        try{
            const response: Record<string, string>={
                "ver productos": "Claro, ¿quieres ver categorías o ofertas?",
                "analizar la competencia": "Esa funcion aun no esta disponible, lo sentimos 🚀.",
                "hola": "¡Hola! ¿En qué puedo ayudarte?",
                "ayuda": "Estoy aquí para ayudarte con analisis de hoteles. ¿Qué necesitas?",
                "gracias": "¡De nada! ¿Algo más?"
            }

            const respuesta = response[mensaje.toLowerCase()] || "Lo siento, no entiendo esa consulta. ¿Puedes reformularla?";
            setTimeout(() => {
                setChatHistory(prev => [...prev, {message: respuesta, timestamp: new Date(), isAi: true}]);
                setIsLoading(false);
            }, 1500);
        }catch(error){
            console.log(error);
            setIsLoading(false);
        }

    }


    

  return (
    <div className=" bg-white rounded-lg sm:rounded-xl shadow-lg min-h-screen flex flex-col items-center justify-between text-center w-full max-w-full sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
        <section className="w-full rounded-lg sm:rounded-xl">
            <Encabezado onClear={handleClearChat} />
        </section>

        <section className="text-align:left sm:text-xl w-full flex-1 overflow-y-auto p-2 sm:p-4">

            {chatHistory.map((msg, index) => (
                <Mensaje
                    key={index}
                    mensaje={msg.message}
                    isAi={msg.isAi}
                    timestamp={msg.timestamp}
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
