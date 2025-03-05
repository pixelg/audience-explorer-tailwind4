// Define the type for a single data item used in the box plot
export type BoxPlotDatum = {
  group: string;
  subgroup: string;
  mu: number;
  sd: number;
  n: number;
  value: number;
};

// Define the type for the data prop, which is an array of BoxPlotDatum objects
export type BoxPlotData = BoxPlotDatum[];