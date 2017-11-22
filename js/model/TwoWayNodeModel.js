define(['OneWayNodeModel'], function (OneWayNodeModel){

	class TwoWayNodeModel extends OneWayNodeModel {
		constructor(data) {
			super(data);
			this.previous = null;
		}
	}

	return TwoWayNodeModel;
});