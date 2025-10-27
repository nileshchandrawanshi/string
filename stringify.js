// stringify.js
// Converts a PEM private key file into stringified JSON

const fs = require('fs');
const path = require('path');

// Path to your private key file (change if needed)
const privateKeyPath = path.join(__dirname, 'private.pem');

// Read the private key file as UTF-8 text
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// Create an object to hold key details
const keyObject = {
  type: 'private-key',
  format: 'pem',
  key: privateKey
};

// Convert the object to a JSON string
const stringifiedJSON = JSON.stringify(keyObject);

// Print the stringified JSON to console
console.log(stringifiedJSON);

// Optionally, write it to a file
fs.writeFileSync('private-key.json', stringifiedJSON, 'utf8');

console.log('\n✅ Private key has been converted to stringified JSON and saved as private-key.json');
