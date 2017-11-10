define(['DataStructureFactory', 'Strategy', 'FirstRotation'],
	function(DataStructureFactory, Strategy, FirstRotation) {

	class State {
		constructor() {
			this.currentState = new FirstRotation(this);
		}

		change(state){
			this.currentState = state;
			this.clear();
			this.currentState.printState();
		}

		start(){
			this.currentState.printState();
		}

		clear(){
			document.getElementsByClassName('designPattern')[0].innerHTML = '';
			document.getElementsByClassName('designPattern')[1].innerHTML = '';
			document.getElementsByClassName('designPattern')[2].innerHTML = '';
			document.getElementsByClassName('designPattern')[3].innerHTML = '';
			document.getElementsByClassName('designPattern')[4].innerHTML = '';
			document.getElementsByClassName('designPattern')[5].innerHTML = '';
			document.getElementById('oneWay').innerHTML = '';
			document.getElementById('twoWay1').innerHTML = '';
			document.getElementById('twoWay2').innerHTML = '';
			document.getElementById('queue').innerHTML = '';
			document.getElementById('stack').innerHTML = '';
			document.getElementById('preorder').innerHTML = '';
			document.getElementById('inorder').innerHTML = '';
			document.getElementById('postorder').innerHTML = '';
			document.getElementById('heap').innerHTML = '';

		}
	}

	return State;
});