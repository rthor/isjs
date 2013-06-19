# is.js

Check your data against regual expressions.

## Usage

Using the module is three step process: Install, Require, Use.

1) Install

	npm install isjs

2) Require

	var is = require('isjs');

3) Use

	// Clever use : returns boolean value
	is('000-0000', 'phone:is')

	// Not as clever use : also returns boolean value
	is('000-0000', /\d{3}-\d{4}/)

## Get in touch

Follow me on twitter [@rthor](http://twitter.com/rthor) or send me a line in an [email](mailto:ragnar@ylgur.is).