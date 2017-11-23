define('game', ['State', 'TypesController', 'ClosuresController', 'msg', 'EventFlow'],
	function(State, TypesController, ClosuresController, msg, EventFlow) {

	let state = new State();
	let typesController = new TypesController();
	let closuresController = new ClosuresController();
	let eventFlow = new EventFlow();

	state.start();
	typesController.showTypesDifference();
});