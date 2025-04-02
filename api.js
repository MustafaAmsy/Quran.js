let dataJson = [];
let rev = { Meccan: "", Median""
async function ver() {
  for(let i = 1; 114 >= i;i++) {
    let response = await fetch('https://api.alquran.cloud/v1/surah/'+i);
    let data = await response.json();
    let d = data.data;
    dataJson.push({ name: { arabic: d.name, english: { name: d.englishName, translation: d.englishNameTranslation }}, revelation: })
  };
  return dataJson[0];
}

(async () => {
    
    console.log(await ver());
})();