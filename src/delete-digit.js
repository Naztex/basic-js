function deleteDigit(n) {
	// Преобразуем число в строку, чтобы можно было работать с каждой цифрой отдельно
	const strNum = String(n);

	// Создаем массив, содержащий все возможные числа, которые можно получить, удаляя одну цифру
	const possibleNums = [];

	// Проходим циклом по каждой цифре числа
	for (let i = 0; i < strNum.length; i++) {
		// Создаем новую строку, исключая текущую цифру
		const newStrNum = strNum.slice(0, i) + strNum.slice(i + 1);
		// Преобразуем новую строку в число и добавляем его в массив возможных чисел
		possibleNums.push(Number(newStrNum));
	}

	// Ищем максимальное число в массиве возможных чисел
	const maxNum = Math.max(...possibleNums);

	// Возвращаем максимальное число
	return maxNum;
}

module.exports = {
  deleteDigit
};
