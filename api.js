let dataJson = [];
let rev = { Meccan: "مكية", Medinan: "مدنية"};
async function ver() {
  for(let i = 1; 114 >= i;i++) {
    let response = await fetch('https://api.alquran.cloud/v1/surah/'+i);
    let data = await response.json();
    let d = data.data;
   let preBasmala = false;
    dataJson.push({ number: d.number, name: { arabic: d.name, english: { name: d.englishName, translation: d.englishNameTranslation }}, revelation: { arabic: rev[d.revelationType], english: d.revelationType }, versesCount: d.numberOfAyahs, verses: [{ }] })
  };
  return dataJson[0];
}

(async () => {
    
    console.log(await ver());
})();