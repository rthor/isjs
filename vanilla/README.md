# is.js

## Description

A very vanilla JavaScript function that tests a string against a given regular expression.

## Usage

Testing is simple. Do an email validation as you'ld ask a friend: is `joe@example.com` an `email`?

	is('joe@example.com', 'email'); // returns `true`

The `is( )` function accepts two arguments: `elem` and `expression`.

The elem argument should always be a string. Don't worry about whitespacing stuff, `is()` trims all strings.

The expression is what you want the elem to be. As in the example above, the expresson tells the `is()` function that the elem, `joe@example.com`, should be and email. If not, `return false`.

## Get in touch

Follow me on twitter [@rthor](http://twitter.com/rthor) or send me a line in an [email](mailto:ragnar@ylgur.is).