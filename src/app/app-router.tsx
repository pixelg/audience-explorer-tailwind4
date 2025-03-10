import {Routes} from "react-router";
import {Route} from "react-router";
import {BarChartRoute} from "@/app/routes/bar-chart.tsx";
import {MainRoute} from "@/app/routes/main.tsx";
import {DashboardLayout} from "@/app/layout.tsx";
import {BoxPlotChartRoute} from "@/app/routes/box-plot-chart.tsx";
import {SinclairAffiliateTableRoute} from "@/app/routes/sinclair-affiliates.tsx";

export const AppRouter = () =>
  <Routes>
    <Route element={<DashboardLayout />} >
      <Route path="/" element={<MainRoute />} />
      <Route path="bar-chart" element={<BarChartRoute />} />
      <Route path="box-plot-chart" element={<BoxPlotChartRoute />} />
      <Route path="sinclair-affiliates" element={<SinclairAffiliateTableRoute />} />
    </Route>
  </Routes>