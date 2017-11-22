define(['DataStructureFactory', 'Strategy', 'TwoWayController', 'ThirdRotation', 'Rotation'],
	function(DataStructureFactory, Strategy, TwoWayController, ThirdRotation, Rotation) {

		class SecondRotation extends Rotation {
			constructor(state) {
				super(state);
				this.stateName = "Second State";
				this.strategy = new TwoWayController();
				this.factory = "queue";
				this.nextState = ThirdRotation;
			}
		}

		return SecondRotation;
	});