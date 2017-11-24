define([], function(){

	class EventNode {

		constructor(key){
			this.key = key;
			this.functionList = [];
		}

		add(func){
			this.functionList.push(func);
		}

	}

	return EventNode;
});