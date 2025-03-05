import Page from "@/app/dashboard/page.tsx";
import {ThemeProvider} from "@/components/themes/ThemeProvider.tsx";

export const AppDashboard  = () =>
  <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
    <Page />
  </ThemeProvider>