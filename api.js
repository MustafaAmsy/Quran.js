async function ver() {
//const fetch = require('node-fetch');
let data;
let d = await fetch('https://api.alquran.cloud/v1/surah/9');
 await d.json();
return d.data;
}
(async() => console.log(await ver()))()