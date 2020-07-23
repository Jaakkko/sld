const fs = require('fs')
const XMLLite = require('xml-lite')


const content = fs.readFileSync('sld.sld', { encoding: 'utf8' })
const parsed = XMLLite.parseFromString(content)
const minified = XMLLite.serializeToString(parsed, false)

const url = `https://julkinen.traficom.fi/inspirepalvelu/rajoitettu/ows?SERVICE=WMS&request=GetMap&format=image/png&version=1.3.0&transparent=true&width=256&height=256&crs=EPSG:3067&bbox=503072,7126016,504096,7127040&sld_body=${encodeURIComponent(minified)}&env=fs:20`
console.log(url)