define([], function() {

	class Event {

		static setDivValues(value){
			document.getElementById("jsEventFlowOutput").innerHTML = value;
		}

	}

	return Event;
});