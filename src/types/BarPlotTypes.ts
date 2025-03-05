// Define the type for a single bar datum
export interface BarPlotTypes {
  country: string;
  'hot dog': number;
  'hot dogColor': string;
  burger: number;
  burgerColor: string;
  sandwich: number;
  sandwichColor: string;
  kebab: number;
  kebabColor: string;
  fries: number;
  friesColor: string;
  donut: number;
  donutColor: string;
  [key: string]: string | number;
}
