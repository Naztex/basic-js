function minesweeper(matrix) {
	const result = [];
	// проходимся по каждой строке входной матрицы
	for (let i = 0; i < matrix.length; i++) {
		const resultSub = [];
		// проходимся по каждому элементу в строке
		for (let j = 0; j < matrix[i].length; j++) {
			let mines = 0;
			// проверяем соседние ячейки на наличие мины
			for (let x = i - 1; x <= i + 1; x++) {
				for (let y = j - 1; y <= j + 1; y++) {
					if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[i].length && !(x === i && y === j)) {
						if (matrix[x][y]) {
						mines++;
						}
					}
				}
			}
			// добавляем количество мин вокруг ячейки в результирующий массив
			resultSub.push(mines);
		}
		// добавляем массив количеств мин вокруг каждой ячейки в результирующую матрицу
		result.push(resultSub);
	}
	return result;
}

module.exports = {
  minesweeper
};
