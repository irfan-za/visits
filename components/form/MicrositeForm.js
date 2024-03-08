"use client";
import { Input } from "../ui/input";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { Label } from "../ui/label";
import { submitDescription, submitLink, submitTitle } from "@/utils/submitData";
import { useDebouncedCallback } from "use-debounce";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LinkTypes } from "@/utils/socialMedia";
import { Button } from "../ui/button";
import { ChevronDown, Pen, Pencil, Trash, Trash2 } from "lucide-react";
import Image from "next/image";
import ImageDialog from "../ImageDialog";

const titleSchema = z.string().min(1, {
  message: "Silahkan isi link label",
});
const urlSchema = z.string().url({ message: "Tautan tidak valid." });
// const titleSchema = z.string().regex(/^[a-zA-Z0-9\s]+$/, {
//   message: 'Karakter yang diperbolehkan hanya huruf & angka.',
// });

function MicrositeForm({ currentUserId, currentEditData, prevLinks }) {
  const { toast } = useToast();
  let currentLink = prevLinks[0];

  const onSubmit = useDebouncedCallback(
    async (value, inputName, formSchema) => {
      const { success, error } = formSchema.safeParse(value);
      if (!success) {
        toast({
          variant: "destructive",
          title: "Ups ada yang salah :(",
          description: `${error.errors[0].message}.`,
        });
      } else {
        currentLink = {
          ...currentLink,
          [inputName]: value,
        };
        toast({
          description: "Loading...",
        });
        if (currentLink.id === 1) {
          const currentLinks = prevLinks.map((prevLink) =>
            prevLink.id === currentLink.id ? currentLink : prevLink,
          );
          submitLink(currentUserId, currentEditData, currentLinks, toast);
        }
      }
    },
    300,
  );

  return (
    <section className="flex flex-col space-y-3">
      <div className="group relative mx-auto">
        <Image
          alt="Profile Picture"
          src={
            "https://scuvpirpxtxnewzvvmwh.supabase.co/storage/v1/object/public/profile_images/ReadyPlayerMe-Avatar.jpeg?t=2024-03-06T03%3A21%3A14.143Z"
          }
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="absolute bottom-2 left-3 mx-auto flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"
          >
            <Trash2 />
          </Button>
          <ImageDialog />
        </div>
        {/* <Label htmlFor="picture">Picture</Label>
        <Input type="file" id="picture" accept="image/*" />  */}
      </div>
      <div>
        <Label htmlFor="title" className="capitalize">
          Link Label
        </Label>
        <Input
          id="title"
          name="title"
          placeholder="Link Label"
          defaultValue={currentLink.title}
          onChange={(e) => onSubmit(e.target.value, e.target.name, titleSchema)}
        />
      </div>
      <div className="flex items-end justify-between">
        <div className="w-3/4">
          <Label htmlFor="url" className="capitalize">
            Link Url
          </Label>
          <Input
            id="url"
            name="url"
            placeholder="https://"
            defaultValue={currentLink.url}
            onChange={(e) => onSubmit(e.target.value, e.target.name, urlSchema)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="capitalize">
              {currentLink.type} <ChevronDown className="ml-2" size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24">
            {LinkTypes.map((link, i) => (
              <DropdownMenuItem key={i}>
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}

export default MicrositeForm;
