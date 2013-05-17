
	/**
	 * Trims leading and trailing whitespace of a string
	 * @return {string}
	 */
	function trim() {
		return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
	}
