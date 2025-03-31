async function ver() {
//const fetch = require('node-fetch');
let data;
let d = await fetch('https://api.alquran.cloud/v1/surah/9');
return await d.json();
}
(async() => console.log(await ver().data.name))()