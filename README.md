# is.js

Check your data against regual expressions or known keywords (see Keyword section). Diffrent versions for different platforms are availible.

Currently these *plugins* are stable:

- jQuery
- Vanilla JavaScript (untested)
- Node.js Module (untested)

## Keywords

**cc (Credit cards)**

Works for credit cards

```javascript
// Example (vanilla JS)
is('0000000000000000', 'cc'); // Returns true
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

Iceland - format: ###-####

```javascript
// Example (vanilla JS)
is('000-0000', 'phone'); // Returns true
is('0000000', 'phone'); // Returns true
```

**zip:'two letter ISO 3166 country code' (Zip codes for countries)**

Australia - format: ####

Austria - format: ####

Belgium - format: ####

Brazil - format: #####-###

Canada - format: A#A #A#

Danmark - format: ### (or) ####

Germany - format: #####

Great Britain - format: AA#A #AA (or) A#A #AA (or) A# #AA (or) A## #AA (or) AA# #AA (or) AA## #AA

Hungry - format: ####

Iceland - format: ###

Italy - format: #####

Japan - format: ###-####

Luxembourg - format: L-####

Nertherland - format: 1### AA

Polland - format: ##-###

Spain - format: [01-50]###

Sweden - format: ### ##

United States of America - format: ##### (or) #####-####

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

## Get in touch

Follow me on twitter [@rthor](http://twitter.com/rthor) or send me a line in an [email](mailto:ragnar.valgeirsson@gmail.com).