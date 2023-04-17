function calculateHanoi(disksNumber, turnsSpeed) {
	// количество ходов
	const turns = Math.pow(2, disksNumber) - 1;
	// время в секундах
	const seconds = Math.floor(turns / (turnsSpeed / 3600));
	// возвращаем объект с количеством ходов и временем
	return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
