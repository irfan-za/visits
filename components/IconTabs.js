import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";
import { useState } from "react";
import { DialogClose } from "./ui/dialog";

const brandList = [
  {
    name: "Tokopedia",
    iconUrl: "https://cdn-sdotid.adg.id/images/tokopedia-icon.png",
  },
  {
    name: "Shopee",
    iconUrl: "https://cdn-sdotid.adg.id/images/shopee-icon.svg",
  },
  {
    name: "Bukalapak",
    iconUrl: "https://cdn-sdotid.adg.id/images/bukalapak-icon.svg",
  },
  {
    name: "GoFood",
    iconUrl: "https://cdn-sdotid.adg.id/images/gofood-icon.svg",
  },
  {
    name: "Gopay",
    iconUrl: "https://cdn-sdotid.adg.id/images/gopay-icon.svg",
  },
  {
    name: "Instagram",
    iconUrl: "https://cdn-sdotid.adg.id/images/instagram-icon.svg",
  },
  {
    name: "WhatsApp",
    iconUrl: "https://cdn-sdotid.adg.id/images/whatsapp-icon.svg",
  },
  {
    name: "Facebook",
    iconUrl: "https://cdn-sdotid.adg.id/images/facebook-icon.svg",
  },
  {
    name: "Twitter",
    iconUrl: "https://cdn-sdotid.adg.id/images/twitter-x-icon.svg",
  },
  {
    name: "LinkedIn",
    iconUrl: "https://cdn-sdotid.adg.id/images/linkedin-icon.svg",
  },
  {
    name: "TikTok",
    iconUrl: "https://cdn-sdotid.adg.id/images/tiktok-icon.svg",
  },
  {
    name: "Spotify",
    iconUrl: "https://cdn-sdotid.adg.id/images/spotify-icon.svg",
  },
  {
    name: "YouTube",
    iconUrl: "https://cdn-sdotid.adg.id/images/youtube-icon.svg",
  },
  {
    name: "Google Drive",
    iconUrl: "https://cdn-sdotid.adg.id/images/google-drive.svg",
  },
  {
    name: "Google Maps",
    iconUrl: "https://cdn-sdotid.adg.id/images/google-maps-icon.svg",
  },
  {
    name: "Google Play",
    iconUrl: "https://cdn-sdotid.adg.id/images/google-play.svg",
  },
];

export default function IconTabs() {
  const [filteredBrandList, setFilteredBrandList] = useState(brandList);
  const filterBrandList = (e) => {
    const value = e.target.value.toLowerCase();
    setFilteredBrandList(
      brandList.filter((brand) => brand.name.toLowerCase().includes(value)),
    );
  };
  return (
    <Tabs defaultValue="brand" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="emoji">Emoji</TabsTrigger>
        <TabsTrigger value="brand">Brand</TabsTrigger>
      </TabsList>
      <TabsContent value="brand">
        <Card>
          <CardHeader>
            <Input
              type="text"
              placeholder="🔍 cari brand"
              onChange={filterBrandList}
            />
          </CardHeader>
          <CardContent className="max-h-64 space-y-2 overflow-y-scroll pt-2">
            {filteredBrandList.map((brand) => (
              <DialogClose asChild key={brand.name}>
                <div className="flex cursor-pointer items-center space-x-2 rounded-md hover:bg-blue-50 hover:ring-2 hover:ring-primary">
                  <Image
                    src={brand.iconUrl}
                    alt={brand.name}
                    width={40}
                    height={40}
                    className=" rounded-lg"
                  />
                  <span>{brand.name}</span>
                </div>
              </DialogClose>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="emoji">
        <EmojiPicker />
      </TabsContent>
    </Tabs>
  );
}
