const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data', 'data.json');

// Read JSON file
const rawData = fs.readFileSync(filePath, 'utf-8');
const surahs = JSON.parse(rawData);
console.log(surahs.find(surah => surah.number === 1))