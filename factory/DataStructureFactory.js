define(['OneWayController', 'TwoWayController', 'QueueController', 'StackController', 'BSTController', 'HeapController'],
	function(OneWayController, TwoWayController, QueueController, StackController, BSTController, HeapController) {

		class DataStructureFactory {

			createDataStructure(type) {
				let dataStructure = null;

				if (type === "oneWay") {
					dataStructure = new OneWayController();
				}
				else if (type === "twoWay") {
					dataStructure = new TwoWayController();
				}
				else if (type === "queue") {
					dataStructure = new QueueController();
				}
				else if (type === "stack") {
					dataStructure = new StackController();
				}
				else if (type === "bst") {
					dataStructure = new BSTController();
				}
				else if (type === "heap") {
					dataStructure = new HeapController();
				}
				else {
					console.log("There is no other data structure");
				}

				return dataStructure;
			}

		}

		return DataStructureFactory;

	});