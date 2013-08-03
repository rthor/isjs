# is.js

Check your data against regular expressions or known keywords (see Keyword section). Different versions for different platforms are availible.

Currently these *plugins* are stable:

- jQuery
- Vanilla JavaScript
- Node.js Module

I wrote a really short blog post about the project a while ago, which can be read at [rthor.is/javascript/cross-plugin-javascript-project-isjs](http://rthor.is/javascript/cross-plugin-javascript-project-isjs/). *Note that some code examples are out of date*.

## Keywords

**cc (Credit cards)**

Works for:

American Express

Discover

MasterCard

Visa

*or any*

```javascript
// Example (vanilla JS)
is('0000000000000000', 'cc:any'); // Returns true
is('4000000000000000', 'cc:Visa'); // Returns true
```

**datetime (Date and time)**

Format: 1996-12-19T16:39:57-08:00

```javascript
// Example (vanilla JS)
is('1996-12-19T16:39:57-08:00', 'datetime'); // Returns true
```

**isbn (ISBN)**

ISBN 10

```javascript
// Example (vanilla JS)
is('0-85131-041-9', 'isbn'); // Returns true
is('0851310419', 'isbn'); // Returns true
```

ISBN 13

```javascript
// Example (vanilla JS)
is('978-1-56619-909-4', 'isbn'); // Returns true
is('9781566199094', 'isbn'); // Returns true
```

**latlng (Latitude and longitude)**

Latitude

```javascript
// Example (vanilla JS)
is('64.163296', 'latlng'); // Returns true
```

Longitude

```javascript
// Example (vanilla JS)
is('-21.859328', 'latlng'); // Returns true
```

**phone (Phone numbers)**

Argentina (ar)

Australia (au)

France (fr)

Iceland (is)

United Kingdom (uk)

United States of America (us)

```javascript
// Example (vanilla JS)
is('+354 000-0000', 'phone:is'); // Returns true
is('000-0000', 'phone:is'); // Returns true
is('0000000', 'phone:is'); // Returns true
```

**zip:'two letter ISO 3166 country code' (Zip codes for countries)**

Argentina (ar)

Australia (au)

Austria (at)

Belgium (be)

Brazil (br)

Canada (ca)

Danmark (dk)

Germany (de)

Great Britain (gb)

Hungry (hu)

Iceland (is)

Italy (it)

Japan (jp)

Luxembourg (lu)

Nertherland (nl)

Polland (pl)

Spain (es)

Sweden (se)

United States of America (us)

```javascript
// Example (vanilla JS)
is('112', 'zip:is'); // Returns true
is('32044', 'zip:us'); // Returns true
```

## Additional Goodies

The second parameter can point to a function within the `check.fn` object. It can also be a regular user defined function accepting a single argument which can be used for some complex (or simple) validation.

```javascript
// Example (vanilla JS)
is(42, function ( num ) {
	return num === 20; // returns false
});
```

The expression argument can be an actual regular expression.

```javascript
// Example (vanilla JS)
is('love', /.+/); // returns true
```

## Change Log

### 0.2.1 *AUGUST 3, 2013*

- Add a Luhn algorithm as a check function. Thanks everyone who pointed out the need for it.

- Fix the README.

- Rename the `regex` obj to `check`. It just makes more sense since we now have function tests.

### 0.2.0 *JULY 30, 2013*

- All regular expressions are unit tested.

- Added functionality to validate via functions. The second argument can now either be a regular function accepting a single argument or a string pointing to a function within the `regex.fn` object.

- Current functions include: even, odd, regexp, ok and function.

### 0.1.2 *JUNE 14, 2013*

- `phone` has become an object so calling it requires a two letter ISO 3166 country code. For example validating Icelandic phone numbers in vanilla JS is now done thusly: `is('+354 000-0000', 'phone:is')`. In addition a few more countries were added.

- `cc` - pretty much same thing happend as with the `phone` thing.

### 0.1.1 *May 24, 2013*

- First stable release

## Get in touch

Follow me on twitter [@rthor](http://twitter.com/rthor) or send me a line in an [email](mailto:ragnar.valgeirsson@gmail.com).