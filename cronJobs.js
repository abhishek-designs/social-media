// const cron = require("node-cron");

// let i = 1;
// const task = cron.schedule("* * * * * *", () => {
//   console.log(`Executed ${i} times`);
//   i++;
// });

// task.stop()

const Cryptr = require("cryptr");

const secretKey = "abhi@123";

const cryptr = new Cryptr(secretKey);

function encryptNumber(number) {
  const encrypted = cryptr.encrypt(number.toString());
  return encrypted;
}

// Decrypt an encrypted number
function decryptNumber(encrypted) {
  const decrypted = cryptr.decrypt(encrypted);
  return decrypted;
}

const encrypted = encryptNumber(1234);
console.log(encrypted);
const decrypted = decryptNumber(encrypted);
console.log(decrypted);
