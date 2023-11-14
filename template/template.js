export let URLGeoJson = "https://asia-southeast2-project3-403605.cloudfunctions.net/ambilmongo";
export let URLPostPoint = "https://asia-southeast2-project3-403605.cloudfunctions.net/post-gcf";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
`