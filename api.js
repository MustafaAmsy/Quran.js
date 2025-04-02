async function ver() {
    let response = await fetch('https://api.alquran.cloud/v1/surah/9');
    let data = await response.json();
    return data.data.name; // data يحتوي على معلومات السورة
}

(async () => {
    
    console.log(await ver());
})();