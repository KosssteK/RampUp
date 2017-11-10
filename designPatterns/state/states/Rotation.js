define(['DataStructureFactory', 'Strategy', 'OneWayController', 'SecondRotation'],
	function(DataStructureFactory, Strategy, OneWayController, SecondRotation) {

		class Rotation {
			constructor(state) {
				this.state = state;
				this.stateName = "First State";
				this.additionFactory = 5;
				this.additionStrategy = 5;
				this.strategy = null;
				this.factory = "";
				this.timeout = 1000;
				this.nextState = SecondRotation;
			}

			printState() {
				this.playDesignPatterns();
				setTimeout(this.setTimeoutFunction.bind(this), this.timeout);
			}

			setTimeoutFunction() {
				this.state.change(new this.nextState(this.state));
			}

			playDesignPatterns() {
				this.setStateString();

				let dataStructureFactory = new DataStructureFactory();
				let product = dataStructureFactory.createDataStructure(this.factory);
				this.setAndPrintFactory(product);

				let strategy = new Strategy();
				strategy.setDataType(this.strategy);
				this.setAndPrintStrategy(strategy);
			}

			setStateString() {
				document.getElementById('state').innerHTML = this.stateName;
			}

			setAndPrintFactory(product) {
				for (let steps = 0; steps < this.additionFactory; steps++) {
					let rand = Math.floor(Math.random() * 50);
					product.addValue(rand);
				}
				product.printFactory();
			}

			setAndPrintStrategy(strategy) {
				for (let steps = 0; steps < this.additionStrategy; steps++) {
					let rand = Math.floor(Math.random() * 50);
					strategy.add(rand);
				}
				strategy.print();
			}
		}

		return Rotation;
	});