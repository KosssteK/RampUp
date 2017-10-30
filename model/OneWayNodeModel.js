define([], function (){

	class OneWayNodeModel {
		constructor(data) {
			this.value = data;
			this.next = null;
		}
	}

	return OneWayNodeModel;
});