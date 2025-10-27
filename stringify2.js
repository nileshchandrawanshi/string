// stringify.js
// Converts a private key file into a single string with escaped \n characters

const fs = require("fs");
const path = require("path");

// Path to your private key file (update if needed)
const keyPath = path.join(__dirname, "private.pem");

// Read private key as UTF-8 text
const privateKey = fs.readFileSync(keyPath, "utf8");

// Replace real newlines with literal \n for JSON-safe output
const escapedKey = privateKey.replace(/\n/g, "\\n");

// Wrap in double quotes for output
const finalOutput = `"${escapedKey}"`;

// Print the result
console.log(finalOutput);


aws secretsmanager put-secret-value --secret-id client-key-secret --secret-string "{\"client_key\":$(cat escaped-key.txt)}"
