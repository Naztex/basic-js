class VigenereCipheringMachine {

	constructor(isDirect = true) {
	  this.isDirect = isDirect; // флаг, определяющий режим работы машины
	}
 
	encrypt(message, key) {
		// обработка ошибки
		if (typeof message === 'undefined' || typeof key === 'undefined') {
			throw new Error('Incorrect arguments!');
			}
		// приведение открытого текста и ключа к верхнему регистру
		message = message.toUpperCase();
		key = key.toUpperCase();
		// переменная для хранения шифртекста
		let result = '';
		// индекс текущего символа ключа
		let keyIndex = 0;
		// перебираем символы открытого текста
		for (let i = 0; i < message.length; i++) {
			const messageChar = message[i];
			const messageCharCode = messageChar.charCodeAt(0);
			// если текущий символ открытого текста не является буквой, то он не шифруется
			if (messageCharCode < 65 || messageCharCode > 90) {
			result += messageChar;
			continue;
			}
			// находим номер текущего символа ключа в таблице символов
			const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65;
			// находим номер символа шифртекста в таблице символов
			let encryptedCharCode = ((messageCharCode - 65 + keyCharCode) % 26) + 65;
			// добавляем символ шифртекста к результату
			result += String.fromCharCode(encryptedCharCode);
			// переходим к следующему символу ключа
			keyIndex++;
		}
		// возвращаем шифртекст в зависимости от режима работы машины
		return this.isDirect ? result : result.split('').reverse().join('');
	}

	decrypt(message, key) {
		// обработка ошибки
		if (typeof message === 'undefined' || typeof key === 'undefined') {
			throw new Error('Incorrect arguments!');
			}
		// приведение шифртекста и ключа к верхнему регистру
		message = message.toUpperCase();
		key = key.toUpperCase();
		// переменная для хранения расшифрованного текста
		let result = '';
		// индекс текущего символа ключа
		let keyIndex = 0;
		// перебираем символы шифртекста
		for (let i = 0; i < message.length; i++) {
			const messageChar = message[i];
			const messageCharCode = messageChar.charCodeAt(0);
			// если текущий символ шифртекста не является буквой, то он не расшифровывается
			if (messageCharCode < 65 || messageCharCode > 90) {
				result += messageChar;
				continue;
			}
			// находим номер текущего символа ключа в таблице символов
			const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65;
			// находим номер символа расшифрованного текста в таблице символов
			let decryptedCharCode = ((messageCharCode - 65 - keyCharCode + 26) % 26) + 65;
			// добавляем символ расшифрованного текста к результату
			result += String.fromCharCode(decryptedCharCode);
			// переходим к следующему символу ключа
			keyIndex++;
		}
		// возвращаем расшифрованный текст в зависимости от режима работы машины
		return this.isDirect ? result : result.split('').reverse().join('');
	}
}

module.exports = {
  VigenereCipheringMachine
};
