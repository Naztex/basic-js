const chainMaker = {
	// Хранение цепочки в свойстве объекта
	chain: [],
	
	// Возвращает текущую длину цепочки
	getLength() {
	  return this.chain.length;
	},
	
	// Добавляет элемент в цепочку
	addLink(value) {
	  // Приводим значение к строке и добавляем его в цепочку
	  this.chain.push(`( ${value} )`);
	  // Возвращаем this для поддержки цепочной записи вызовов методов
	  return this;
	},
	
	// Удаляет элемент из цепочки по позиции
	removeLink(position) {
	  // Если позиция не является числом или выходит за границы цепочки, выбрасываем ошибку
	  if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
		 // Очищаем цепочку, чтобы при вызове finishChain была возвращена пустая строка
		 this.chain = [];
		 throw new Error("You can't remove incorrect link!");
	  }
	  
	  // Удаляем элемент из цепочки
	  this.chain.splice(position - 1, 1);
	  // Возвращаем this для поддержки цепочной записи вызовов методов
	  return this;
	},
	
	// Переворачивает цепочку
	reverseChain() {
	  this.chain.reverse();
	  // Возвращаем this для поддержки цепочной записи вызовов методов
	  return this;
	},
	
	// Завершает цепочку и возвращает ее в виде строки
	finishChain() {
	  // Соединяем элементы цепочки с помощью разделителя '~~'
	  const result = this.chain.join('~~');
	  // Очищаем цепочку, чтобы при следующем вызове была возвращена пустая строка
	  this.chain = [];
	  // Возвращаем результат
	  return result;
	}
 };

module.exports = {
  chainMaker
};
