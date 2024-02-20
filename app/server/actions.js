// 'use server'
// import { generateRandomText } from "@/utils/generateRandomString";
// import supabase from "../api/supabase";

// export const createShortLink = async (formData) => {
//   const longUrl = formData.get("long_url");
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (new URL(longUrl)) {
//       console.log(longUrl);
//       const newUrl = generateRandomText();
//       let postData = {};
//       if (user) {
//         postData = {
//           short_url: newUrl,
//           long_url: longUrl,
//           supabase_auth_id: user.id,
//         };
//       } else {
//         postData = {
//           short_url: newUrl,
//           long_url: longUrl,
//         };
//       }
//       const { error } = await supabase
//         .from("urls")
//         .insert([postData])
//         .select()
//         .single();
//       if (error) {
//         alert(error.message);
//       }
//     } else {
//       alert("Link URL Tidak Valid!");
//     }
//   };
