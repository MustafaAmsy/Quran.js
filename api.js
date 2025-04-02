const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data', 'data.json');
const rawData = fs.readFileSync(filePath, 'utf-8');
const surahs = JSON.parse(rawData);

const updatedSurahs = surahs.map(surah => ({
  ...surah,
  verses: surah.verses.map(verse => ({
    ...verse,
    hizbNumber: Math.floor(verse.hizbQuarter / 4) + 1
  }))
}));

// Write back to JSON file
fs.writeFileSync(filePath, JSON.stringify(updatedSurahs, null, 2), 'utf-8');

console.log("Hizb numbers added successfully!");






