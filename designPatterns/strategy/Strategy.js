define([], function() {

	class Strategy {
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
			document.getElementsByClassName("designPattern")[this.dataType.order].innerHTML = "Strategy";
			this.dataType.print();
		}

	}

	return Strategy;
});