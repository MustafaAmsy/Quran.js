let doe = []
async function test() {
let response = await fetch('https://api.alquran.cloud/v1/surah/1');
    let data = await response.json();
    let d = data.data;
    for(let i = 1; 7 >= i; i++) {
      doe[i] = d.ayahs.find(a => a.numberInSurah === 1)
    }
    return doe;
}
(async() => console.log(await test()))()