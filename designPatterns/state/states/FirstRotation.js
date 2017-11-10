define(['DataStructureFactory', 'Strategy', 'OneWayController', 'SecondRotation', 'Rotation'],
	function(DataStructureFactory, Strategy, OneWayController, SecondRotation, Rotation) {

		class FirstRotation extends Rotation {

			constructor(state) {
				super(state);
				this.stateName = "First State";
				this.strategy = new OneWayController();
				this.factory = "twoWay";
				this.nextState = SecondRotation;
			}
		}

		return FirstRotation;
	});