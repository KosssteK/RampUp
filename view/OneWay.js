define(['oneWayModel'], function(oneWayModel) {

	class OneWay {
		constructor() {
		}

		static printList(){
			let finalList = "Head->";
			let pointer = oneWayModel;
			while(pointer.next !== null && pointer.next !== undefined){
				finalList += pointer.next.value + "->";
				pointer = pointer.next;
			}
			finalList += "NULL";
			return finalList;
		};

		static setDivValues(){
			document.getElementById('output1').innerHTML = this.printList();
			document.getElementById('output2').innerHTML = '';
			document.getElementById('output3').innerHTML = '';
		}

	}

	return OneWay;
});