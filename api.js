const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'data', 'quran.json');

// Read JSON file
const rawData = fs.readFileSync(filePath, 'utf-8');
const surahs = JSON.parse(rawData);

// Update each verse with Hizb number using page number
const updatedSurahs = surahs.map(surah => ({
  ...surah,
  verses: surah.verses.map(verse => ({
    ...verse,
    hizbNumber: Math.floor((verse.page - 1) / 10) + 1 // Calculate Hizb based on page number
  }))
}));

// Write back to JSON file
fs.writeFileSync(filePath, JSON.stringify(updatedSurahs, null, 2), 'utf-8');

console.log("Hizb numbers updated successfully using page numbers!");