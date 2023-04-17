const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >= MODERN_ACTIVITY) {
		// Если значение sampleActivity некорректно, вернуть false
		return false;
	}

	// Использовать формулу для определения возраста
	const age = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD));
	return age;
}

module.exports = {
  dateSample
};
