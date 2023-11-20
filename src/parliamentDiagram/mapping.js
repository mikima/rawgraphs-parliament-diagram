export const mapData = function (data, mapping, dataTypes, dimensions) {
  //output a new array of objects renaming the two columns with dimensions names
  return data.map((d) => ({
    seats: d[mapping.seats.value],
    color: d[mapping.partyColor.value],
  }))
}
