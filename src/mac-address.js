function isMAC48Address(n) {
	// Создаем регулярное выражение для поиска шаблона MAC-адреса
	const macAddressPattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
	// Проверяем, соответствует ли входная строка шаблону MAC-адреса
	return macAddressPattern.test(n);
 }

module.exports = {
  isMAC48Address
};
