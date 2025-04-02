async function ver() {
    let response = await fetch('https://api.alquran.cloud/v1/surah/9');
    let data = await response.json();
    return data.data; // data يحتوي على معلومات السورة
}

(async () => {
    let surah = await ver();
    console.log(surah.name); // استخدام name من كائن السورة
})();