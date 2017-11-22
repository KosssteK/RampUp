define('game', ['State', 'TypesController'], function(State, TypesController) {

	let state = new State();
	let typesController = new TypesController();
	state.start();
	typesController.showTypesDifference();

});