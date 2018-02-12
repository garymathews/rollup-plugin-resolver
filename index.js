'use strict';
const path = require('path');

module.exports = (modules) => {
	let map = {};

	for (let key in modules) {
		map.set(path.resolve(key), modules[key]);
	}

	return {
		options (options) {
			if (options.input && typeof options.input === 'object') {
				for (let key in options.input) {
					map[path.resolve(key)] = options.input[key];
				}
				options.input = Object.keys(options.input)[0];
			}
		},

		resolveId (key, importer) {
			let resolved = path.resolve(key);
			if (resolved in map) {
				return resolved;
			}
			if (importer) {
				resolved = path.resolve(path.dirname(importer), key);
				if (resolved in map) {
					return resolved;
				}
			}
		},

		load (key) {
			if (key in map) {
				return map[key];
			}
		}
	};
};