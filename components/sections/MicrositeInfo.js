"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import NextPrevButton from "../NextPrevButton";
import useStore from "@/store/useStore";

const alphanumericRegex = /^[a-zA-Z0-9]+$/;
const FormSchema = z.object({
  title: z.string().min(1, {
    message: "Nama wajib diisi",
  }),
  short_url: z.string().refine((value) => alphanumericRegex.test(value), {
    message: "Format singkatan url yang diterima hanya berupa Alfanumerik",
  }),
});

export default function MicrositeInfo() {
  const { setMicrositeInfo } = useStore((state) => state);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      short_url: "",
    },
  });
  async function onSubmit(data) {
    setMicrositeInfo(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="ml-12 max-w-md space-y-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Microsite</FormLabel>
              <FormControl>
                <Input placeholder="Nama Microsite" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="short_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tautan Microsite</FormLabel>
              <FormControl>
                <span className="relative flex items-center justify-center space-x-2">
                  <span className="absolute left-4 my-auto text-lg font-medium text-primary">
                    visits.id/
                  </span>
                  <Input
                    placeholder="tautan-microsite"
                    {...field}
                    className="pl-20"
                  />
                </span>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <NextPrevButton
          validCurrentValue={FormSchema.safeParse(form.getValues()).success}
          micrositeInfo={form.getValues()}
          errorMessage={"Masukan data yang valid"}
        />
      </form>
    </Form>
  );
}
