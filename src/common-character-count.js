function getCommonCharacterCount(s1, s2) {
	// объект для хранения частоты повторений букв в строке s1
	const freq = {};
	// переменная для хранения количества общих букв
	let count = 0;

	// Заполняем объект freq для строки s1
	for (let i = 0; i < s1.length; i++) {
		const char = s1[i];
		freq[char] = freq[char] ? freq[char] + 1 : 1;
	}

	// Перебираем все буквы в строке s2
	for (let i = 0; i < s2.length; i++) {
		const char = s2[i];
		// Если буква уже была встречена в строке s1, уменьшаем её количество в freq и увеличиваем count
		if (freq[char]) {
			freq[char]--;
			count++;
		}
	}

	return count;
}
 
module.exports = {
  getCommonCharacterCount
};
