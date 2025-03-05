import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button.tsx"
import { useTheme} from "@/hooks/useTheme.tsx";

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />}
      {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
    </Button>
  )
}
