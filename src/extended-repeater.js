function repeater(str, options) {
	// Получаем значения параметров или устанавливаем значения по умолчанию
	const repeatTimes = options.repeatTimes || 1;
	const separator = options.separator !== undefined ? options.separator : '+';
	const addition = options.addition !== undefined ? options.addition : '';
	const additionRepeatTimes = options.additionRepeatTimes || 1;
	const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

	// Создаем строку из дополнительной строки, повторенной нужное количество раз и объединенной разделителем
	const additionStr = new Array(additionRepeatTimes)
		.fill(String(addition))
		.join(additionSeparator);

	// Создаем итоговую строку из строки, повторенной нужное количество раз, и добавленной к ней дополнительной строки, объединенных разделителем
	const resultStr = new Array(repeatTimes)
		.fill(String(str) + additionStr)
		.join(separator);

	return resultStr;
}

module.exports = {
  repeater
};
