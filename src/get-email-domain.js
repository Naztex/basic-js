function getEmailDomain(email) {
	// находим позицию символа "@" в строке
	const index = email.lastIndexOf('@');
	// возвращаем подстроку, начинающуюся со следующего символа после "@"
	return email.slice(index + 1);
}

module.exports = {
  getEmailDomain
};
