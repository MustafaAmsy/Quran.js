async function ver() {
//const fetch = require('node-fetch');
let data;
let d = await fetch('https://api.alquran.cloud/v1/surah/114');
return await d.json();
}
console.log(ver())