import {
  BarChart4,
  Calendar,
  Edit,
  Facebook,
  Instagram,
  MessageCircleMore,
  PackageOpen,
  Share2,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import supabaseServer from "@/app/api/supabase-server";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

async function LinkList({ search, currentPage }) {
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();
  const { data: urls, error } = await supabaseServer
    .from("urls")
    .select()
    .eq("supabase_auth_id", user.id)
    .order("created_at", { ascending: false });

  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="mr-2 h-4 w-4" />,
    },
    {
      name: "Instagram",
      icon: <Instagram className="mr-2 h-4 w-4" />,
    },
    {
      name: "Whatsapp",
      icon: <MessageCircleMore className="mr-2 h-4 w-4" />,
    },
    {
      name: "Twitter",
      icon: <Twitter className="mr-2 h-4 w-4" />,
    },
  ];
  const filteredData = urls?.filter((url) => url.long_url.includes(search));
  return (
    <>
      {filteredData ? (
        filteredData.map((url) => {
          return (
            <div
              key={url.id}
              className="mb-4 rounded-lg border border-gray-400 bg-white px-4 py-2"
            >
              <section className="flex justify-between py-4">
                <Link href={`https://visits.id/${url.short_url}`}>
                  <h4 className="text-xl font-semibold text-gray-700 hover:underline">
                    visits.id/{url.short_url}
                  </h4>
                  <p className="max-w-xs truncate text-sm text-gray-600 hover:underline sm:max-w-md sm:text-base lg:max-w-xl">
                    {url.long_url}
                  </p>
                </Link>
                <div className="flex space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>
                        <Share2 size={18} className="mr-2" /> Bagikan
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-24">
                      {socialMedia.map((social, i) => (
                        <DropdownMenuItem key={i}>
                          {social.icon}
                          <span>{social.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link href={`/dashboard/links/${url.id}`}>
                    <Button variant="secondary">
                      <Edit size={18} className="mr-2" /> Edit
                    </Button>
                  </Link>
                </div>
              </section>
              <section className="flex items-center justify-between border-t py-2">
                <div className="flex items-center">
                  <Calendar size={18} color="rgb(107 114 128)" />
                  <span className="ml-2 text-sm text-gray-500">
                    {formatDate(url.created_at)}
                  </span>
                </div>
                <Button variant="secondary">
                  <BarChart4 size={18} />
                  <span className="ml-2 text-sm">
                    <Link href={"/dashboard/analytics"}>Statistik</Link>
                  </span>
                </Button>
              </section>
            </div>
          );
        })
      ) : (
        <div className="text-center">
          <PackageOpen color="rgb(34 197 94)" className="mx-auto h-16 w-16" />
          <p className="text-xl font-semibold lg:text-3xl">Masih Kosong!</p>
          <p>Yuk persingkat tautan panjangmu disini.</p>
        </div>
      )}
      {error && (
        <div className="text-center">
          Terjadi kesalahan saat memuat data : <strong>{error.message}</strong>
        </div>
      )}
    </>
  );
}

export default LinkList;
