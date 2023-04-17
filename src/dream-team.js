function createDreamTeam(members) {
	// Проверяем, является ли аргумент массивом
	if (!Array.isArray(members)) {
		return false;
	}

	// Фильтруем массив, оставляя только строки
	let filteredMembers = members.filter((member) => typeof member === 'string');

	// Из каждой строки выбираем первую букву и приводим ее к верхнему регистру
	let firstLetters = filteredMembers.map((member) => member.trim()[0].toUpperCase());

	// Сортируем полученные буквы по алфавиту
	let sortedLetters = firstLetters.sort();

	// Склеиваем все буквы в одну строку и возвращаем ее
	return sortedLetters.join('');
}

module.exports = {
  createDreamTeam
};
