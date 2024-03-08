import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IconTabs from "./IconTabs";
import { Upload, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { DialogClose } from "./ui/dialog";

export default function ImageTabs() {
  const [image, setImage] = useState(null);

  const setNewImage = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <Tabs defaultValue="icon" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="icon">Pilih icon</TabsTrigger>
        <TabsTrigger value="picture">Upload gambar</TabsTrigger>
      </TabsList>
      <TabsContent value="icon">
        <IconTabs />
      </TabsContent>
      <TabsContent value="picture">
        <Card>
          <CardContent>
            <div class="relative mx-auto mb-4 aspect-square max-w-[200px] cursor-pointer items-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 p-2 text-center">
              {image ? (
                <>
                  <Image
                    src={URL.createObjectURL(image)}
                    width={100}
                    height={100}
                    alt="preview"
                    class="h-full w-full rounded-lg object-cover"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-2 h-6 w-6 rounded-full"
                    onClick={() => setImage(null)}
                  >
                    <X />
                  </Button>
                </>
              ) : (
                <>
                  <input
                    id="upload"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    onChange={setNewImage}
                  />
                  <label
                    for="upload"
                    class="flex h-full cursor-pointer flex-col items-center justify-center"
                  >
                    <Upload />
                    <h5 class=" font-semibold text-gray-700">Pilih gambar</h5>
                  </label>
                </>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <DialogClose asChild>
              <Button>Upload</Button>
            </DialogClose>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
