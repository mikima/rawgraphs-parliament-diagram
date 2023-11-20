import * as d3 from 'd3'
import { legend } from '@rawgraphs/rawgraphs-core'
import '../d3-styles.js'
import * as d3ParliamentChart from 'd3-parliament-chart'

export function render(
  node,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  // select the SVG element

  const svg = d3.select(node)

  let parliamentData = data.map((d) => ({
    seats: d.seats,
    color: visualOptions.colorScale(d.color),
  }))

  console.log(visualOptions)

  let pc = d3ParliamentChart
    .parliamentChart()
    .width(visualOptions.width)
    .aggregatedData(parliamentData)
    .seatRadius(visualOptions.dotRadius)
    .rowHeight(visualOptions.rowHeight)
    .sections(visualOptions.sections)
    .sectionGap(visualOptions.sectionGap)
    .debug(false)

  let chart = svg.append('g').call(pc)

  // since the library is not always able to position all the dots,
  // check that the amout is equal to data
  const totalSeats = d3.sum(data, (d) => d.seats)
  const totalDots = chart.selectAll('circle').size()
  if (totalDots < totalSeats) {
    throw new Error(
      `Increase artboard size or decrease dots radius. Ath the moment only ${totalDots} dots out of ${totalSeats} are plotted.`
    )
  }
}
