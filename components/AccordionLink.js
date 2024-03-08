import { User, Youtube } from "lucide-react";
import ProfileForm from "./form/ProfileForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import MicrositeForm from "./form/MicrositeForm";

export function AccordionLink({ currentUserId, currentEditData }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="1">
        <AccordionTrigger>
          <h4 className="flex text-sm font-semibold">
            <User className="mr-2 h-4 w-4" />
            Profile
          </h4>
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <ProfileForm
            currentUserId={currentUserId}
            currentEditData={currentEditData}
            type={"title"}
            name={"nama profil"}
          />
          <ProfileForm
            currentUserId={currentUserId}
            currentEditData={currentEditData}
            type={"description"}
            name={"deskripsi"}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="2">
        <AccordionTrigger>
          <h4 className="flex text-sm font-semibold">
            <Youtube className="mr-2 h-4 w-4" />
            Youtube
          </h4>
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <MicrositeForm
            currentUserId={currentUserId}
            currentEditData={currentEditData}
            prevLinks={currentEditData.links}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
