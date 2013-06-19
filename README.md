# is.js

Check your data against regular expressions or known keywords (see Keyword section). Different versions for different platforms are availible.

Currently these *plugins* are stable:

- jQuery
- Vanilla JavaScript (untested)
- Node.js Module (untested)

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

## One more thing.

The expression argument can be an actual regular expression.

```javascript
// Example (vanilla JS)
is('love', /.+/); // returns true
```

## Change Log

### 0.1.2 *JUNE 14, 2013*

- `phone` has become an object so calling it requires a two letter ISO 3166 country code. For example validating Icelandic phone numbers in vanilla JS is now done thusly: `is('+354 000-0000', 'phone:is')`. In addition a few more countries were added.

- `cc` - pretty much same thing happend as with the `phone` thing.

### 0.1.1 *May 24, 2013*

- First stable release

## Get in touch

Follow me on twitter [@rthor](http://twitter.com/rthor) or send me a line in an [email](mailto:ragnar.valgeirsson@gmail.com).