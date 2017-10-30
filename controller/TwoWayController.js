define(['twoWayModel', 'TwoWayNodeModel'], function(twoWayModel, TwoWayNodeModel) {

	class TwoWayController {
		constructor() {
		}

		static addToList(value) {
			var node = new TwoWayNodeModel(value);
			if (!twoWayModel.next) {
				twoWayModel.next = node;
			}else
			{
				node.next = twoWayModel.next;
				twoWayModel.next.previous = node;
				twoWayModel.next = node;
			}
			twoWayModel.length++;
		}
	}

	return TwoWayController;
});