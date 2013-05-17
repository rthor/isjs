# is.js

## Description

A very vanilla JavaScript function that tests a string against a given regular expression.

## Usage

Testing is simple. Do an email validation as you'ld ask a friend: is `joe@example.com` an `email`?

	is('joe@example.com', 'email'); // returns `true`

The `is( )` function accepts two arguments: `elem` and `expression`.

The elem argument should always be a string. Don't worry about whitespacing stuff, `is()` trims all strings.

The expression is what you want the elem to be. As in the example above, the expresson tells the `is()` function that the elem, `joe@example.com`, should be and email. If not, `return false`.

Available expressions include:

**cc**

CreditCard numbers without dashes.

**datetime**

Date according to W3C for input type="datetime". Matches the following:

1990-12-31T23:59:60Z

1996-12-19T16:39:57-08:00

**email**

Email address.

**isbn**

Validattes both ISBN10 and ISBN13.

**latlng**

Latitude and longitude.

**phone**

Formats include:

- +### ###-####
- +######-####
- \###-####
- \#######

## One more thing.

The expression argument can be an actual regular expression.

	is('love', /.+/) // returns true

## Get in touch

Follow me on twitter [@rthor](http://twitter.com/rthor) or send me a line in an [email](mailto:ragnar@ylgur.is).