function getSumOfDigits(n) {
	// Если число состоит из одной цифры, возвращаем его
	if (n < 10) {
		return n;
	// Иначе суммируем цифры числа
	} else {
		const sum = n
			// Преобразуем число в строку
			.toString()
			// Разбиваем строку на массив из символов
			.split('')
			// Преобразуем каждый символ в число
			.map(Number)
			// Складываем все числа в массиве
			.reduce((acc, curr) => acc + curr);
		// Рекурсивно вызываем функцию суммирования для полученной суммы цифр
		return getSumOfDigits(sum);
	}
}

module.exports = {
  getSumOfDigits
};
