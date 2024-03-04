"use client";

import { ChevronDown, ChevronUp, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ProfileForm from "./form/ProfileForm";
import { useState } from "react";

export function CollapsibleLink({ currentUserId, currentEditData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger asChild>
        <div className="flex cursor-pointer items-center justify-between space-x-4 rounded-md border px-4 hover:bg-secondary">
          <h4 className="flex text-sm font-semibold">
            <User className="mr-2 h-4 w-4" />
            Profile
          </h4>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <ProfileForm
          currentUserId={currentUserId}
          currentEditData={currentEditData}
        />
      </CollapsibleContent>
    </Collapsible>
  );
}
