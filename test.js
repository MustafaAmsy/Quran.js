async function test() {
let response = await fetch('https://api.alquran.cloud/v1/surah/1');
    let data = await response.json();
    let d = data.data;
    return d.ayahs.find(a => a.numberInSurah === 1)
}
(async() => console.log(await test()))()