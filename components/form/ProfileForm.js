"use client";
import { Input } from "../ui/input";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { Label } from "../ui/label";
import { submitDescription, submitTitle } from "@/utils/submitData";
import { useDebouncedCallback } from "use-debounce";

const FormSchema = z.string().min(1);

function ProfileForm({ currentUserId, currentEditData, type, name }) {
  const { toast } = useToast();
  const onSubmit = useDebouncedCallback(async (data) => {
    const { success } = FormSchema.safeParse(data);
    if (!success) {
      toast({
        variant: "destructive",
        title: "Ups ada yang salah :(",
        description: `Mohon isi ${name}.`,
      });
    } else {
      toast({
        description: "Loading...",
      });
      type === "title"
        ? submitTitle(data, currentUserId, currentEditData, toast)
        : submitDescription(data, currentUserId, currentEditData, toast);
    }
  }, 300);

  return (
    <>
      <Label htmlFor={type} className="capitalize">
        {name}
      </Label>
      <Input
        id={type}
        placeholder={name}
        defaultValue={
          type === "title" ? currentEditData.title : currentEditData.description
        }
        onChange={(e) => onSubmit(e.target.value)}
      />
    </>
  );
}

export default ProfileForm;
