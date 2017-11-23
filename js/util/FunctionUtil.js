define('FunctionUtil', [], function() {

	class FunctionUtil {

		static getAllMethods(instance) {
			return Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
				.filter(name => {
					let method = instance[name];
					return method instanceof Function;
				});
		}

		static bind(instance) {
			this.getAllMethods(instance)
				.forEach(mtd => {
					instance[mtd] = instance[mtd].bind(instance);
				})
		}
	}

	return FunctionUtil;
});