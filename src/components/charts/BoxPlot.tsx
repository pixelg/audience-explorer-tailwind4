import {ResponsiveBoxPlot} from '@nivo/boxplot'
import {BoxPlotData} from "@/types/BoxPlotTypes.ts";
import { BoxPlotTheme } from "@/components/charts/BoxPlotTheme.tsx";

type BoxPlotProps = {
  data: BoxPlotData;
}

export const BoxPlot = ({data /* see data tab */}: BoxPlotProps) => (
  <ResponsiveBoxPlot
    data={data}
    margin={{top: 60, right: 90, bottom: 60, left: 60}}
    minValue={0}
    maxValue={10}
    subGroupBy="subgroup"
    padding={0.12}
    enableGridX={true}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: 36,
      truncateTickAt: 0
    }}
    axisRight={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: 0,
      truncateTickAt: 0
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'group',
      legendPosition: 'middle',
      legendOffset: 32,
      truncateTickAt: 0
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'value',
      legendPosition: 'middle',
      legendOffset: -40,
      truncateTickAt: 0
    }}
    theme={BoxPlotTheme}
    colors={{scheme: 'nivo'}}
    borderRadius={2}
    borderWidth={2}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          0.3
        ]
      ]
    }}
    medianWidth={2}
    medianColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          0.3
        ]
      ]
    }}
    whiskerEndSize={0.6}
    whiskerColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          0.3
        ]
      ]
    }}
    motionConfig="stiff"
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemWidth: 60,
        itemHeight: 20,
        itemsSpacing: 3,
        itemTextColor: 'white', // white color for legend text
        itemDirection: 'left-to-right',
        symbolSize: 20,
        symbolShape: 'square',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#ddd'
            }
          }
        ]
      }
    ]}
  />
)