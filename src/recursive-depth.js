class DepthCalculator {
	calculateDepth(arr) {
		// инициализируем переменную глубины
		let depth = 1;
		arr.forEach(element => {
		// если элемент массив, вызываем функцию рекурсивно
			if (Array.isArray(element)) {
			// добавляем глубину уровня
			const nestedDepth = this.calculateDepth(element) + 1;
			// если текущая глубина больше предыдущей
			if (nestedDepth > depth) {
				// обновляем значение глубины
				depth = nestedDepth;
			}
			}
		});
		return depth;
	}
}

module.exports = {
  DepthCalculator
};
