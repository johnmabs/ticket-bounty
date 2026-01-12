import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

export default function Placeholder({
  label,
  icon = <LucideMessageSquareWarning />,
  button = null,
}: {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col self-center items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
}
