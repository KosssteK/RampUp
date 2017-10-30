define(['oneWayModel', 'OneWayNodeModel'], function(oneWayModel, OneWayNodeModel) {

	class OneWayController {
		constructor() {
		}

		static addToList(value) {
			var node = new OneWayNodeModel(value);
			if (!oneWayModel.next) {
				oneWayModel.next = node;
			}else
			{
				node.next = oneWayModel.next;
				oneWayModel.next = node;
			}
			oneWayModel.length++;
		}


	}

	return OneWayController;
});