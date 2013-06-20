
	// Object to String result shortcuts
	type = {
		args: '[object Arguments]',
		array: '[object Array]',
		bool: '[object Boolean]',
		date: '[object Date]',
		error: '[object Error]',
		func: '[object Function]',
		number: '[object Number]',
		object: '[object Object]',
		regexp: '[object RegExp]',
		string: '[object String]'
	};

	function isRegExp( val ) {
		return val ? (typeof val === 'object' && toString.call(val) === type.regexp) : false;
	}
