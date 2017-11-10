define(['DataStructureFactory', 'Strategy', 'QueueController', 'FourthRotation', 'Rotation'],
	function(DataStructureFactory, Strategy, QueueController, FourthRotation, Rotation) {

		class ThirdRotation extends Rotation {

			constructor(state) {
				super(state);
				this.stateName = "Third State";
				this.strategy = new QueueController();
				this.factory = "stack";
				this.nextState = FourthRotation;
			}

		}

		return ThirdRotation;
	});