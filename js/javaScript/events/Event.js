define([], function(){

	class Event {

		constructor(key){
			this.key = key;
			this.functionList = [];
			this.once = false;
		}

		add(func){
			this.functionList.push(func);
		}

	}

	return Event;
});