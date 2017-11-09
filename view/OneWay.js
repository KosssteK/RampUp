define([], function() {

	class OneWay {
		constructor() {
		}

		static setDivValues(value){
			document.getElementById('oneWay').innerHTML = value;
		}

	}

	return OneWay;
});