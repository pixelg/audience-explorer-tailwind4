import {Routes} from "react-router";
import {Route} from "react-router";
import {BarChartRoute} from "@/app/routes/bar-chart-route.tsx";
import {MainRoute} from "@/app/routes/main-route.tsx";
import {DashboardLayout} from "@/app/layout.tsx";
import {BoxPlotChartRoute} from "@/app/routes/box-plot-chart-route.tsx";
import {SinclairAffiliateRoute} from "@/app/routes/sinclair-affiliate-route.tsx";

export const AppRouter = () =>
  <Routes>
    <Route element={<DashboardLayout />} >
      <Route path="/" element={<MainRoute />} />
      <Route path="bar-chart" element={<BarChartRoute />} />
      <Route path="box-plot-chart" element={<BoxPlotChartRoute />} />
      <Route path="sinclair-affiliates" element={<SinclairAffiliateRoute />} />
    </Route>
  </Routes>