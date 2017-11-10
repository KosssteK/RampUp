define([], function() {

	class StrategyController {
		constructor() {
			this.dataType = null;
		}

		setDataType(dataType){
			this.dataType = dataType;
		}

		add(value){
			this.dataType.add(value);
		}

		print(){
			this.dataType.print();
		}

	}

	return StrategyController;
});