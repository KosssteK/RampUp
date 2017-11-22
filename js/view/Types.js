define([], function() {

	class Types {

		static print(primitive, object) {
			document.getElementsByClassName('types')[0].innerHTML = "Primitive: " + primitive;
			document.getElementsByClassName('types')[1].innerHTML = "Object: " + object.x;
		}

	}

	return Types;

});