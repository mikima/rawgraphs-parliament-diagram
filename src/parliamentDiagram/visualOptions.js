export const visualOptions = {
  dotDiameter: {
    type: 'number',
    label: 'Dot diameter',
    default: 4,
    group: 'Chart',
  },

  rowHeight: {
    type: 'number',
    label: 'Row height',
    default: 15,
    group: 'Chart',
  },

  sections: {
    type: 'number',
    label: 'Number of sections',
    default: 1,
    group: 'Chart',
  },

  sectionGap: {
    type: 'number',
    label: 'gap between sections',
    default: 0,
    group: 'Chart',
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },
}
