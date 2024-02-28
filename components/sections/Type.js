import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useStore from "@/store/useStore";
import { useToast } from "../ui/use-toast";

function Type() {
  const { type, setType, step, increaseStep } = useStore((state) => state);
  const { toast } = useToast();
  const nextStep = () => {
    if (type !== "") {
      increaseStep();
    } else {
      toast({
        variant: "destructive",
        title: "Pilih jenis microsite dahulu.",
      });
    }
  };
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-2">
        <Button
          variant="secondary"
          onClick={() => setType("personal-branding")}
          className="focus:bg-primary focus:text-primary-foreground focus:ring-2 focus:ring-blue-300"
        >
          👨‍🎓 Personal Branding
        </Button>
        <Button
          variant="secondary"
          onClick={() => setType("branding")}
          className="focus:bg-primary focus:text-primary-foreground focus:ring-2 focus:ring-blue-300"
        >
          👨 Branding
        </Button>
      </div>
      <div className="mt-10 flex justify-end space-x-2">
        {/* <Button variant="secondary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
        </Button> */}
        <Button
          onClick={nextStep}
          className="bg-green-500 text-primary-foreground hover:bg-green-600"
        >
          <ArrowRight className="mr-2 h-4 w-4" /> Lanjut
        </Button>
      </div>
      {type}
    </>
  );
}

export default Type;
