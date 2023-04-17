function getDNSStats(domains) {
	// Создаем пустой объект, в котором будем хранить количество встреч каждого домена.
	const result = domains.reduce((acc, domain) => {
		// Разбиваем каждый домен на отдельные части, разделенные точками, и переворачиваем их порядок.
		const domainParts = domain.split('.').reverse();
		// Создаем пустую строку, в которой будем хранить все поддомены.
		let subdomain = '';
		// Для каждой части домена, начиная с последней и заканчивая первой:
		domainParts.forEach((part) => {
			// Добавляем очередную часть к поддомену.
			subdomain += `.${part}`;
			// Добавляем поддомен к объекту, увеличивая его количество на 1.
			acc[subdomain] = (acc[subdomain] || 0) + 1;
		});
		// Возвращаем аккумулятор на каждой итерации.
		return acc;
	}, {});
	// Возвращаем объект со статистикой доменов.
	return result;
}

module.exports = {
  getDNSStats
};
