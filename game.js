define('game', ['State', 'TypesController', 'ClosuresController'], function(State, TypesController, ClosuresController) {

	let state = new State();
	let typesController = new TypesController();
	let closuresController = new ClosuresController();
	state.start();
	typesController.showTypesDifference();
});