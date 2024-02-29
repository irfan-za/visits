"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import useStore from "@/store/useStore";
import { useToast } from "./ui/use-toast";
import supabase from "@/app/api/supabase";
import { useRouter } from "next/navigation";

function NextPrevButton({
  validCurrentValue,
  errorMessage,
  micrositeInfo = null,
}) {
  const {
    step,
    increaseStep,
    decreaseStep,
    resetStep,
    type,
    setType,
    theme,
    setTheme,
    setMicrositeInfo,
  } = useStore((state) => state);
  const { toast } = useToast();
  const router = useRouter();
  const nextStep = () => {
    if (validCurrentValue) {
      micrositeInfo ? submitForm() : increaseStep();
    } else {
      toast({
        variant: "destructive",
        title: errorMessage,
      });
    }
  };
  const submitForm = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from("microsites").insert({
      type: type,
      theme: theme,
      title: micrositeInfo.title,
      short_url: micrositeInfo.short_url,
      supabase_auth_id: session.user.id,
    });
    if (error) {
      toast({
        variant: "destructive",
        title: "Ups ada yang salah :(",
        description: error.message,
      });
    } else {
      toast({
        description: "Berhasil ✅",
      });
      router.replace("/dashboard/microsite");
      resetStep();
      setType("");
      setTheme("");
      setMicrositeInfo({ title: "", short_url: "" });
    }
  };
  return (
    <div className="mt-10 flex justify-end space-x-2">
      {step > 1 && (
        <Button onClick={() => decreaseStep()} variant="secondary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
        </Button>
      )}
      <Button
        onClick={nextStep}
        type="submit"
        className="bg-green-500 text-primary-foreground hover:bg-green-600"
      >
        <ArrowRight className="mr-2 h-4 w-4" /> Lanjut
      </Button>
    </div>
  );
}

export default NextPrevButton;
