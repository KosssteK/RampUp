define([], function() {

	class TwoWay {

		static setDivValues(value) {
			document.getElementById('twoWay1').innerHTML = value[0];
			document.getElementById('twoWay2').innerHTML = value[1];
		}
	}

	return TwoWay;
});