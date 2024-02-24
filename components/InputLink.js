"use client";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import supabase from "@/app/api/supabase";
import { useRouter } from "next/navigation";
import { generateRandomText } from "@/utils/generateRandomString";

const schema = z.object({
  long_url: z.union([
    z.string().url({ message: "Tautan tidak valid." }),
    z.string().includes("."),
  ]),
});

function InputLink() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      long_url: "",
    },
  });

  const createShortLink = async (data) => {
    const shortUrl = generateRandomText();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { long_url } = data;
    const { data: urls, error } = await supabase
      .from("urls")
      .select("short_url")
      .eq("short_url", shortUrl);

    if (urls.length === 0) {
      const { error } = await supabase.from("urls").insert({
        long_url,
        short_url: shortUrl,
        supabase_auth_id: user.id,
      });
      if (error) {
        toast({
          variant: "destructive",
          title: "Ups ada yang salah :(",
          description: error.message,
        });
      } else {
        toast({
          title: "Berhasil ✅",
          description: "Tautan berhasil dibuat.",
        });
        form.reset();
        router.refresh();
      }
    } else if (error) {
      toast({
        variant: "destructive",
        title: "Ups ada yang salah :(",
        description: error.message,
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(createShortLink)}>
        <div className="relative flex max-w-xl items-center space-x-3 rounded-lg border border-gray-400 bg-white p-3 shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/[.2]">
          <div className="flex-[100%]">
            <FormField
              control={form.control}
              name="long_url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Masukkan link disini"
                      {...field}
                      className="block w-full rounded-md border-none border-transparent bg-white p-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
                    />
                  </FormControl>
                  <FormMessage className="absolute top-16" />
                </FormItem>
              )}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 p-1 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:p-3 md:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <span>Singkatkan</span>
          </button>
        </div>
      </form>
    </Form>
  );
}

export default InputLink;
