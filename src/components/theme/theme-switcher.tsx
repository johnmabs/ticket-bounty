"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <LucideSun
          className="
            absolute h-4 w-4 rotate-90 scale-0 transition-transform
            dark:rotate-0 dark:scale-100
          "
        />
        <LucideMoon
          className="
             h-4 w-4 rotate-0 scale-100 transition-all
            dark:-rotate-90 dark:scale-0
          "
        />

        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
