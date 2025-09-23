"use client"

import { Button } from "@/components/ui/button"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ArrowUpFromLine } from "lucide-react";


const formSchema = z.object({
  mensaje: z.string(),
})

type Props = {
    setChat: (mensaje:string) => void;
};

export default function FormChat({setChat}: Props) {


    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mensaje: "",
    },
    })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setChat(values.mensaje);
    form.reset();
  }


  return (

    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex rounded-b-lg sm:rounded-b-xl bg-gradient-to-r from-[#284947] to-[#707E7A] w-full h-full justify-between items-center">

        <div className="flex space-x-1 font-normal sm:space-x-2 w-full rounded-lg sm:rounded-xl gap-2 pr-2">
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem className="w-full ml-1 mr-2">
                <FormControl >
                  <Input className="text-white ml-1 bg-gray-200 text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {
            form.watch("mensaje")? <Button type="submit" className="flex h-8 sm:h-9 bg-[#0C90A7] ">
            <ArrowUpFromLine/>
            </Button> 
            : null
          }
          
        </div>
      </form>
    </Form>
  );
}
