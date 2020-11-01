const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Error');
    }
    let result = '';
    let spacesCount = 0;
    for (let i = 0; i < message.length; i++) {
      if ((/[a-zA-Z]/).test(message[i])) {
        let keyIndex = (i - spacesCount) % key.length;
        const messageCode = message[i].toUpperCase().charCodeAt(0);
        const keyCode = key[keyIndex].toUpperCase().charCodeAt(0);
        result += String.fromCharCode(((messageCode + keyCode - 130) % 26) + 65).toUpperCase();
      } else {
        result += message[i];
        spacesCount++;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Error');
    }
    let result = '';
    let spacesCount = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if ((/[a-zA-Z]/).test(encryptedMessage[i])) {
        let keyIndex = (i - spacesCount) % key.length;
        const encryptedMessageCode = encryptedMessage[i].toUpperCase().charCodeAt(0);
        const keyCode = key[keyIndex].toUpperCase().charCodeAt(0);
        result += String.fromCharCode(((encryptedMessageCode - keyCode + 26) % 26) + 65).toUpperCase();
      } else {
        result += encryptedMessage[i];
        spacesCount++;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
