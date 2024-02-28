import { cn } from "@/lib/utils";
import useStore from "@/store/useStore";

function Step({ stepNumber = 1, sectionTitle = "" }) {
  const step = useStore((state) => state.step);
  return (
    <section className=" flex items-center gap-4">
      <p
        className={cn(
          "my-1 flex h-[33px] w-[33px] items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-gray-500",
          {
            "border-primary bg-primary text-primary-foreground":
              stepNumber === step,
          },
        )}
      >
        {stepNumber}
      </p>
      <p
        className={cn("text-sm font-bold text-gray-500", {
          "text-gray-800": stepNumber === step,
        })}
      >
        {sectionTitle}
      </p>
    </section>
  );
}

export default Step;
