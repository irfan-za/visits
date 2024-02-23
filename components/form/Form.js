"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import supabase from "@/app/api/supabase";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  short_url: z.string().min(1, {
    message: "Mohon isi tautan singkat.",
  }),
  long_url: z.string().url({ message: "Tautan tidak valid." }),
});

export function InputForm({
  currentUserId,
  currentEditData,
  shortUrl,
  longUrl,
}) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      short_url: shortUrl,
      long_url: longUrl,
    },
  });
  const router = useRouter();

  async function onSubmit(data) {
    const { error } = await supabase
      .from("urls")
      .update({
        short_url: data.short_url,
        long_url: data.long_url,
        supabase_auth_id: currentUserId,
      })
      .eq("id", currentEditData);
    if (error) {
      toast({
        variant: "destructive",
        title: "Ups ada yang salah :(",
        description: error.message,
      });
    } else {
      toast({
        description: "Berhasil update data ✅",
      });
      router.replace("/dashboard/links");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="ml-10 mt-10 w-2/3 max-w-md space-y-6"
      >
        <FormField
          control={form.control}
          name="short_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tautan singkat</FormLabel>
              <FormControl>
                <span className="flex items-center justify-center space-x-2 text-2xl font-medium">
                  <span>visits.id/</span>
                  <Input placeholder="Tautan singkat" {...field} />
                </span>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="long_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tautan panjang</FormLabel>
              <FormControl>
                <Input placeholder="Tautan panjang" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
