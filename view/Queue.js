define([], function() {

	class Queue {

		static setDivValues(value) {
			document.getElementById('queue').innerHTML = value;
		}
	}

	return Queue;
});