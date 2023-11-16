export const mapData = function (data, mapping, dataTypes, dimensions) {
  return data.map((d) => ({
    seats: d[mapping.seats.value],
    color: d[mapping.partyColor.value],
  }))
}
