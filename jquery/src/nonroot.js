
		// Else if the plugin is run on an DOM element
		// Set up the correct expression and value based on
		// node type.
		} else {
			var nodeName = this[0].nodeName.toLowerCase();
			expression = arguments[0];

			value = nodeName === 'input' ?
				this.val() :
				nodeName === 'p' || nodeName === 'h1' || nodeName === 'h2' || nodeName === 'h3' || nodeName === 'h4' || nodeName === 'h5' || nodeName === 'h6' || nodeName === 'a' || nodeName === 'li' || nodeName === 'blockquote' || nodeName === 'pre' ||  nodeName === 'code' || nodeName === 'b' ||  nodeName === 'strong' ||  nodeName === 'em' || nodeName === 'i' || nodeName === 'div' || nodeName === 'button' || nodeName === 'textarea' || nodeName === 'span' ?
				this.html() :
				this.selector;
		}
