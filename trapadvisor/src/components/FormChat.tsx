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
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex space-y-8 border w-150 justify-between items-center border-red-300  bg-white">

        <div className="flex space-x-2 w-full border-2 border-blue-300 p-2 rounded-xl">
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl >
                  <Input className="text-black w-full border-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="flex h-9 bg-[#0C90A7] ">
            <ArrowUpFromLine/>
          </Button>
        </div>
      </form>
    </Form>
  );    
}
