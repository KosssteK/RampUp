define(['Rotation', 'BSTController', 'HeapController', 'OneWayController', 'QueueController', 'StackController', 'TwoWayController'],
	function(Rotation, BSTController, HeapController, OneWayController, QueueController, StackController, TwoWayController) {

		class LastRotation extends Rotation {
			constructor(state) {
				super(state);
				this.stateName = "Final State";
				this.bst = new BSTController();
				this.heap = new HeapController();
				this.oneWay = new OneWayController();
				this.queue = new QueueController();
				this.stack = new StackController();
				this.twoWay = new TwoWayController();
			}

			printState() {
				this.setStateString();
				this.printData(this.oneWay);
				this.printData(this.twoWay);
				this.printData(this.queue);
				this.printData(this.stack);
				this.printData(this.bst);
				this.printData(this.heap);
			}

			printData(dataStructure){
				for (let steps = 0; steps < this.additionStrategy; steps++) {
					let rand = Math.floor(Math.random() * 50);
					dataStructure.add(rand);
				}
				dataStructure.print();
			}
		}

		return LastRotation;
	});