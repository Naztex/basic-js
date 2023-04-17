function getSeason(date) {
	try {
		// Проверяем, что значение даты не пустое
		if (!date) {
			// возвращаем сообщение об ошибке
			return 'Unable to determine the time of year!';
		}

		// Проверяем, что переданное значение является объектом Date
		// и не является NaN (некорректное значение даты)
		if (!(date instanceof Date) || isNaN(date)) {
			// если значение не соответствует требованиям, выбрасываем ошибку
			throw new Error('Invalid date!');
		}

		// Получаем номер месяца из переданной даты
		const month = date.getMonth();

		// Определяем время года на основе номера месяца
		switch (month) {
			case 11:
			case 0:
			case 1:
				return 'winter';
			case 2:
			case 3:
			case 4:
				return 'spring';
			case 5:
			case 6:
			case 7:
				return 'summer';
			default:
				return 'autumn';
		}
	} catch {
		// если произошла ошибка, выбрасываем ошибку
		throw new Error('Invalid date!');
	}
}

module.exports = {
  getSeason
};
