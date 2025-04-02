const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data', 'data.json');
const fileData = fs.readFileSync(filePath);
const parsedData = JSON.parse(fileData);
console.log(parsedData.find(s => s.number === 110))