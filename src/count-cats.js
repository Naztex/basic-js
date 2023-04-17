function countCats(matrix) {
	// создаем счетчик для подсчета найденных котов
	let count = 0;

	// перебираем все элементы матрицы
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			// если текущий элемент равен "^^", увеличиваем счетчик на 1
			if (matrix[i][j] === '^^') {
			count++;
			}
		}
	}

	// возвращаем количество найденных котов
	return count;
}

module.exports = {
  countCats
};
