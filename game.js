define('game', ['DataStructureFactory', 'Strategy', 'OneWayController', 'TwoWayController', 'QueueController', 'StackController', 'BSTController', 'HeapController'],
	function(DataStructureFactory, Strategy, OneWayController, TwoWayController, QueueController, StackController, BSTController, HeapController) {

		this.oneWayController = new OneWayController();
		this.twoWayController = new TwoWayController();
		this.queueController = new QueueController();
		this.stackController = new StackController();
		this.bstController = new BSTController();
		this.heapController = new HeapController();

		let dataStructureFactory = new DataStructureFactory();
		let product = dataStructureFactory.createDataStructure("bst");
		product.addValue(4);
		product.addValue(5);
		product.addValue(87);
		product.addValue(2);
		product.printFactory();

		let strategy = new Strategy();
		strategy.setDataType(this.queueController);
		strategy.add(5);
		strategy.add(33);
		strategy.add(6);
		strategy.add(-3);
		strategy.add(0);
		strategy.add(51);
		strategy.add(21);
		strategy.print();
});