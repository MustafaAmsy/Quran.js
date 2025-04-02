let dataJson = [];
let rev = { Meccan: "مكية", Medinan: "مدنية"};
async function ver() {
  for(let i = 1; 114 >= i;i++) {
    let response = await fetch('https://api.alquran.cloud/v1/surah/'+i);
    let data = await response.json();
    let d = data.data;
   let preBasmala = true;
   if(i == 9) {
     preBasmala = false
   }
   }
   let verses = [];
   for(let e = 1; d.numberofAyahs >= e; e++) {
     const verseData = d.ayahs.find(a => a.numberInSurah === e);
     verses.push({ text: verseData.text.replaceAll('\n', ''), verseNumber: verseData.number, number: verseData.numberInSurah, juz: verseData.juz, page: verseData.page, hizbQuarter: verseData.hizbQuarter, isSajdah: verseData.sajda})
   }
    dataJson.push({ number: d.number, name: { arabic: d.name, english: { name: d.englishName, translation: d.englishNameTranslation }}, revelation: { arabic: rev[d.revelationType], english: d.revelationType }, versesCount: d.numberOfAyahs, preBasmala: preBasmala, })
  };
  return dataJson[0];
}

(async () => {
    
    console.log(await ver());
})();