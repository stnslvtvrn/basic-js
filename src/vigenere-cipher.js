const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }
    encrypt(str, keys) {
        if (!str || !keys) throw new Error();
        let alphabet = /[A-Z]/;
        let text = [...(str.toUpperCase())];
        let key = [...(keys.toUpperCase())];
        let charCodeText = [];
        let charCodeKey = [];
        let outputText = [];
        text.map(elem => {
            alphabet.test(elem) ? charCodeText.push(elem.charCodeAt() - 65) : false;
        });
        while (charCodeKey.length <= charCodeText.length) {
            key.map(elem => {
                charCodeKey.push(elem.charCodeAt() - 65);
            });
        };
        charCodeKey.length > charCodeText.length ? charCodeKey.slice(0, charCodeText.length) : false;
        for (let i = 0; i < charCodeText.length; i++) {
            charCodeText[i] = String.fromCharCode((charCodeText[i] + charCodeKey[i]) % 26 + 65);
        };
        let counter = 0;
        for (let i of text) {
            if (alphabet.test(i)) {
                outputText.push(charCodeText[counter]);
                counter++;
            } else outputText.push(i);
        };
        return this.direct ? outputText.join('') : outputText.reverse().join('');

    }
    decrypt(str, keys) {
        if (!str || !keys) throw new Error();
        let alphabet = /[A-Z]/;
        let text = [...(str.toUpperCase())];
        let key = [...(keys.toUpperCase())];
        let charCodeText = [];
        let charCodeKey = [];
        let outputText = [];
        text.map(elem => {
            alphabet.test(elem) ? charCodeText.push(elem.charCodeAt() - 65) : false;
        });
        while (charCodeKey.length <= charCodeText.length) {
            key.map(elem => {
                charCodeKey.push(elem.charCodeAt() - 65);
            });
        };
        charCodeKey.length > charCodeText.length ? charCodeKey.slice(0, charCodeText.length) : false;
        for (let i = 0; i < charCodeText.length; i++) {
            charCodeText[i] = charCodeText[i] + 65 - charCodeKey[i];
            if (charCodeText[i] < 65) {
                while (charCodeText[i] < 65) charCodeText[i] = charCodeText[i] + 26;
            };
            charCodeText[i] = String.fromCharCode((charCodeText[i]));
        };

        let counter = 0;
        for (let i of text) {
            if (alphabet.test(i)) {
                outputText.push(charCodeText[counter]);
                counter++;
            }else outputText.push(i);
        }
        return this.direct ? outputText.join('') : outputText.reverse().join('');
    }
}
module.exports = VigenereCipheringMachine;