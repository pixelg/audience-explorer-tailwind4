import WidgetCard from "@/components/widget-card.tsx";
// import {TrendsChart} from "@/components/charts/trends-chart.tsx";
import { WavyTrendsChart } from "@/components/charts/wavy-trends-chart.tsx";

export const MainRoute = () =>
  <>
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50 p-2">
        <WidgetCard title="Lovin' It - Campaign"/>
      </div>
      <div className="aspect-video rounded-xl bg-muted/50 p-2">
        <WidgetCard />
      </div>
      <div className="aspect-video rounded-xl bg-muted/50 p-2">
        <WidgetCard/>
      </div>
    </div>
    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
      <WavyTrendsChart/>
      {/*<TrendsChart />*/}
    </div>
  </>