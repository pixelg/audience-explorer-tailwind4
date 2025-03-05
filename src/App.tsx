import {ThemeProvider} from "@/components/themes/ThemeProvider.tsx";
import {AppRouter} from "@/app/app-router.tsx";

export const App  = () =>
  <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
    <AppRouter />
  </ThemeProvider>