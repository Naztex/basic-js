function getMatrixElementsSum(matrix) {
	let sum = 0;

	// проходимся по строкам матрицы и считаем сумму всех элементов,
	// кроме тех, которые ниже элемента, равного нулю
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i === 0) {
			sum += matrix[i][j]; // если строка первая, то просто добавляем все ее элементы к сумме
			} else if (matrix[i - 1][j] !== 0) {
			// если элемент выше текущего не равен нулю, то добавляем текущий элемент к сумме
			sum += matrix[i][j];
			}
		}
	}

	return sum;
}
 
module.exports = {
  getMatrixElementsSum
};
