import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import supabase from "@/app/api/supabase";
import { usePathname, useRouter } from "next/navigation";
import { Label } from "../ui/label";

const FormSchema = z.string().min(1, {
  message: "Mohon isi nama profil.",
});

function ProfileForm({ currentUserId, currentEditData }) {
  const { toast } = useToast();
  async function onSubmit(data) {
    const { success, error } = FormSchema.safeParse(data);
    if (!success) {
      toast({
        variant: "destructive",
        title: "Ups ada yang salah :(",
        description: error.errors[0].message,
      });
    } else {
      toast({
        description: "Loading...",
      });
      const { error } = await supabase
        .from("microsites")
        .update({
          title: data,
          supabase_auth_id: currentUserId,
        })
        .eq("id", currentEditData?.id);
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
      }
    }
  }

  return (
    <>
      <Label htmlFor="title">Nama Profil</Label>
      <Input
        id="title"
        placeholder="nama profil"
        defaultValue={currentEditData.title}
        onChange={(e) => onSubmit(e.target.value)}
      />
    </>
  );
}

export default ProfileForm;

// import React from 'react'
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
// import { Input } from '../ui/input'
// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Button } from '../ui/button';

// const FormSchema = z.object({
//   title: z.string().min(1, {
//     message: "Mohon isi nama profil.",
//   }),
//   description: z.string().min(1, {
//     message: "Mohon isi deskripsi.",
//   }),
// });

// function ProfileForm({currentUserId}) {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       title: '',
//       description: '',
//     },
//   });
//   async function onSubmit(data) {
//     const { error } = await supabase
//       .from("microsites")
//       .update({
//         title: data.title,
//         description: data.description,
//         supabase_auth_id: currentUserId,
//       })
//       .eq("id", currentEditData);
//     if (error) {
//       toast({
//         variant: "destructive",
//         title: "Ups ada yang salah :(",
//         description: error.message,
//       });
//     } else {
//       toast({
//         description: "Berhasil update data ✅",
//       });
//       router.replace("/dashboard/links");
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Nama Profil</FormLabel>
//               <FormControl>
//                 <Input placeholder="nama profil" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Deskripsi Profil</FormLabel>
//               <FormControl>
//                 <Input placeholder="deskripsi" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }

// export default ProfileForm
