define(['DataStructureFactory', 'Strategy', 'StackController', 'LastRotation', 'Rotation'],
	function(DataStructureFactory, Strategy, StackController, LastRotation, Rotation) {

		class FourthRotation extends Rotation {
			constructor(state) {
				super(state);
				this.stateName = "Forth State";
				this.strategy = new StackController();
				this.factory = "bst";
				this.nextState = LastRotation;
			}
		}

		return FourthRotation;
	});