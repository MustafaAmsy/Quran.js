let dataJson = [];
async function ver() {
  for(let i = 1; 114 >= i;i++) {
    let response = await fetch('https://api.alquran.cloud/v1/surah/'+i);
    let data = await response.json();
  } 
}

(async () => {
    
    console.log(await ver());
})();