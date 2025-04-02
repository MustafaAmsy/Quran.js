const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'data', 'data.json');

// Read JSON file
const rawData = fs.readFileSync(filePath, 'utf-8');
const surahs = JSON.parse(rawData);

// Update each verse with Hizb number, ensuring the number does not exceed 60
const gSurahs = surahs.map(surah => ({
  ...surah,
  verses: surah.verses.map(verse => ({
    ...verse,
    hizbNumber: Math.min(Math.floor(verse.hizbQuarter / 4) + 1, 60) // Prevents hizbNumber from going above 60
  }))
}));

// Write back to JSON file
fs.writeFileSync(filePath, JSON.stringify(gSurahs, null, 2), 'utf-8');

console.log("Hizb numbers added successfully!");