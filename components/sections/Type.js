import { Button } from "../ui/button";
import useStore from "@/store/useStore";
import NextPrevButton from "../NextPrevButton";
import { cn } from "@/lib/utils";

function Type() {
  const { type, setType } = useStore((state) => state);
  return (
    <>
      <div className="ml-12 grid gap-3 lg:grid-cols-2">
        <Button
          variant="secondary"
          onClick={() => setType("personal-branding")}
          className={cn(
            "focus:bg-primary focus:text-primary-foreground focus:ring-2 focus:ring-blue-300",
            {
              "bg-primary text-primary-foreground ring-2 ring-blue-300":
                type === "personal-branding",
            },
          )}
        >
          👨‍🎓 Personal Branding
        </Button>
        <Button
          variant="secondary"
          onClick={() => setType("branding")}
          className={cn(
            "focus:bg-primary focus:text-primary-foreground focus:ring-2 focus:ring-blue-300",
            {
              "bg-primary text-primary-foreground ring-2 ring-blue-300":
                type === "branding",
            },
          )}
        >
          👨 Branding
        </Button>
      </div>
      <NextPrevButton
        validCurrentValue={type !== ""}
        errorMessage={"Pilih jenis microsite dahulu."}
      />
    </>
  );
}

export default Type;
