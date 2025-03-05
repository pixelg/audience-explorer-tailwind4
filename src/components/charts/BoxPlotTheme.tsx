export const BoxPlotTheme = {
  translation: {},
  // Axis styling
  axis: {
    domain: {
      line: {
        stroke: 'white'
      }
    },
    ticks: {
      line: {
        stroke: 'white'
      },
      text: {
        fill: 'white'
      }
    },
    legend: {
      text: {
        fill: 'white'
      }
    }
  },
  // Legends (if rendered outside the axis)
  legends: {
    text: {
      fill: 'white'
    }
  },
  // Optionally, adjust tooltip for better contrast on a dark background
  tooltip: {
    container: {
      background: '#333', // dark background for the tooltip container
      color: 'white'
    }
  }
};