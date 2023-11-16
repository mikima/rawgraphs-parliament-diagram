import chart from 'customcharts/parliamentDiagram'
import data from '../datasets/italian-parliament.csv'

export default {
  chart,
  data,
  mapping: {
    seats: { value: ['seats'] },
    partyColor: { value: ['name'] },
  },
  visualOptions: {
    dotRadius: 3,
  },
}
