define(['OneWayController', 'EventNode', 'FunctionUtil'], function(OneWayController, EventNode, FunctionUtil) {

	class EventDispatcher {

		constructor() {
			FunctionUtil.bind(this);
			this.eventList = new OneWayController();
		}

		emit(key) {
			let event = this.findValue(key, true);
			if (event !== null) {
				this.executeFunctions(event);
			}
			else {
				console.warn("There is no event: " + key);
			}
		}

		on(key, func) {
			let event = this.findValue(key);
			if (event !== null) {
				event.add(func);
			}
			else {
				this.eventList.add(this.createEvent(key, func));
			}
		}

		executeFunctions(event) {
			for (let position = 0; position < event.functionList.length; position++) {
				event.functionList[position]();
				if (event.once) {
					event.functionList.splice(position, 1);
				}
			}
		}

		createEvent(key, func) {
			let event = new EventNode(key);
			event.add(func);
			return event;
		}

		findValue(value) {
			let pointer = this.eventList.oneWayModel;
			while (pointer.next !== null && pointer.next !== undefined) {
				if (pointer.next.value.key === value) return pointer.next.value;
				pointer = pointer.next;
			}
			return null;
		}

	}

	return EventDispatcher;
});