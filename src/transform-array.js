function transform(arr) {
	
	// Проверяем, является ли аргумент arr массивом
	if (!Array.isArray(arr)) {
		throw new Error('\'arr\' parameter must be an instance of the Array!');
	}

	// Создаем пустой массив, в который будем добавлять результаты преобразования
	const resultArr = [];

	// Проходимся циклом по каждому элементу исходного массива arr
	for (let i = 0; i < arr.length; i++) {
		// Проверяем каждый элемент на наличие определенных управляющих последовательностей и применяем соответствующие преобразования
		switch (arr[i]) {
			// В случае, если текущий элемент --discard-next, пропускаем следующий элемент
			case '--discard-next':
			i++;
			break;

			// В случае, если текущий элемент --discard-prev, удаляем последний элемент из результирующего массива, если такой есть
			case '--discard-prev':
			if (resultArr.length > 0 && arr[i - 2] !== '--discard-next') {
				resultArr.pop();
			}
			break;

			// В случае, если текущий элемент --double-next, добавляем следующий элемент в результирующий массив
			case '--double-next':
			if (i < arr.length - 1) {
				resultArr.push(arr[i + 1]);
			}
			break;

			// В случае, если текущий элемент --double-prev, добавляем предыдущий элемент в результирующий массив, если такой есть
			case '--double-prev':
			if (i > 0 && arr[i - 2] !== '--discard-next') {
				resultArr.push(arr[i - 1]);
			}
			break;

			// Если текущий элемент не является управляющей последовательностью, добавляем его в результирующий массив
			default:
			resultArr.push(arr[i]);
		}
	}

	// Возвращаем результирующий массив
	return resultArr;
}

module.exports = {
  transform
};
