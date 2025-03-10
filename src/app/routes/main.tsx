import WidgetCard from "@/components/WidgetCard.tsx";
import {TrendsChart} from "@/components/charts/TrendsChart.tsx";

export const MainRoute = () =>
  <>
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50 p-2">
        <WidgetCard />
      </div>
      <div className="aspect-video rounded-xl bg-muted/50 p-2">
        <WidgetCard />
      </div>
      <div className="aspect-video rounded-xl bg-muted/50 p-2">
        <WidgetCard />
      </div>
    </div>
    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
      <TrendsChart />
    </div>
  </>