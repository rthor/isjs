chai.should();

describe('jQuery Plugin', function() {
	describe('Applicability', function() {
		it("Works on paragraph elements", function() {
			var p = $('</p>').text('john.doe@company.com');
			p.is('email').should.be.true;
		});

		it('Works on input elements', function() {
			var input = $('<input>').val('john.doe@company.com');
			input.is('email').should.be.true;
		});

		it("Works on strings", function() {
			$.is('john.doe@company.com', 'email').should.be.true;
		});
	});

	describe('Functions', function() {
		it('Accepts function validation', function() {
			function even ( num ) { return (num % 2) === 0; }
			$.is(232, even).should.be.true;
		});

		it('Has predefined functions', function() {
			$.is(/\w.+/g, 'regexp').should.be.true;
		});
	});
});

describe('Functions', function() {
	it('Validates boolean values', function() {
		regex.fn.ok( true ).should.be.true;
	});

	it('Tests if a value is a regular expression', function() {
		regex.fn.regexp( /love?/ ).should.be.true;
	});

	it('Tests if a value is a regfunctionular expression', function() {
		regex.fn.function(function () {
			return 'I am a function - Deal with it!';
		}).should.be.true;
	});

	it('Test whither numbers are even', function() {
		regex.fn.even( 234 ).should.be.true;
	});

	it('Test whither numbers are odd', function() {
		regex.fn.odd( 533 ).should.be.true;
	});
});

describe("Regular expression keywords", function() {

	describe("Credit cards", function() {
		it("Works for any credit card", function() {
			regex.cc['any'].test('123412341234123', 'cc:any').should.be.true;
			regex.cc['any'].test('1234123412341234', 'cc:any').should.be.true;
		});

		it("Works for American Express", function() {
			regex.cc['AmericanExpress'].test('3412312345654526').should.be.true;
			regex.cc['AmericanExpress'].test('3712312345654526').should.be.true;
		});

		it("Works for Discover", function() {
			regex.cc['Discover'].test('6011123456123456').should.be.true;
		});

		it("Works for MasterCard", function() {
			regex.cc['MasterCard'].test('5112345671234567').should.be.true;
			regex.cc['MasterCard'].test('5212345671234567').should.be.true;
			regex.cc['MasterCard'].test('5312345671234567').should.be.true;
			regex.cc['MasterCard'].test('5412345671234567').should.be.true;
			regex.cc['MasterCard'].test('5512345671234567').should.be.true;
		});

		it("Works for Visa", function() {
			regex.cc['Visa'].test('4000123412341234').should.be.true;
		});
	});

	describe("Date and time", function() {
		it("Format: 1996-12-19T16:39:57-08:00", function() {
			regex.datetime.test('1996-12-19T16:39:57-08:00').should.be.true;
		});
	});

	describe("ISBN", function() {
		it("ISBN 10", function() {
			regex.isbn.test('0-85131-041-9').should.be.true;
			regex.isbn.test('0851310419').should.be.true;
		});

		it("ISBN 13", function() {
			regex.isbn.test('978-1-56619-909-4').should.be.true;
			regex.isbn.test('9781566199094').should.be.true;
		});
	});

	describe("Latitude and longitude", function() {
		it("Latitude", function() {
			regex.latlng.test('64.163296').should.be.true;
		});

		it("Longitude", function() {
			regex.latlng.test('-21.859328').should.be.true;
		});
	});

	describe("Phone numbers", function() {
		it("Argentina", function() {
			regex.phone['ar'].test('+54 2345-6789').should.be.true;
			regex.phone['ar'].test('2345-6789').should.be.true;
			regex.phone['ar'].test('23456789').should.be.true;
		});

		it("Australia", function() {
			regex.phone['au'].test('+61 8 4550 8955').should.be.true;
			regex.phone['au'].test('061 8 4550 8955').should.be.true;
			regex.phone['au'].test('8 4550 8955').should.be.true;
		});

		it("France", function() {
			regex.phone['fr'].test('0423 23 12 24').should.be.true;
			regex.phone['fr'].test('+33423 23 12 24').should.be.true;
			regex.phone['fr'].test('0033423 23 12 24').should.be.true;
		});

		it("Iceland", function() {
			regex.phone['is'].test('123-4567').should.be.true;
			regex.phone['is'].test('+354 123-4567').should.be.true;
		});

		it("United Kingdom", function() {
			regex.phone['uk'].test('12345 123456').should.be.true;
		});

		it("United States of America", function() {
			regex.phone['us'].test('123-456-7890').should.be.true;
		});
	});

	describe("Zip codes for countries", function() {
		it("Argentina", function() {
			regex.zip['ar'].test('1122').should.be.true;
		});

		it("Australia", function() {
			regex.zip['au'].test('1122').should.be.true;
		});

		it("Austria", function() {
			regex.zip['at'].test('1122').should.be.true;
		});

		it("Belgium", function() {
			regex.zip['be'].test('1122').should.be.true;
		});

		it("Brazil", function() {
			regex.zip['br'].test('25251-121').should.be.true;
		});

		it("Canada", function() {
			regex.zip['ca'].test('K2A 7B7').should.be.true;
		});

		it("Danmark", function() {
			regex.zip['dk'].test('123').should.be.true;
			regex.zip['dk'].test('1234').should.be.true;
		});

		it("Germany", function() {
			regex.zip['de'].test('12345').should.be.true;
		});

		it("Great Britain", function() {
			regex.zip['gb'].test('gj5g 5hh').should.be.true;
			regex.zip['gb'].test('h7u 5hh').should.be.true;
			regex.zip['gb'].test('h7 5hh').should.be.true;
			regex.zip['gb'].test('h76 5hh').should.be.true;
			regex.zip['gb'].test('hf6 5hh').should.be.true;
			regex.zip['gb'].test('hf63 5hh').should.be.true;
		});


		it("Hungry", function() {
			regex.zip['hu'].test('1234').should.be.true;
		});

		it("Iceland", function() {
			regex.zip['is'].test('112').should.be.true;
		});

		it("Italy", function() {
			regex.zip['it'].test('12345').should.be.true;
		});

		it("Japan", function() {
			regex.zip['jp'].test('123-1234').should.be.true;
		});

		it("Luxembourg", function() {
			regex.zip['lu'].test('L-1234').should.be.true;
		});

		it("Nertherland", function() {
			regex.zip['nl'].test('1234 aG').should.be.true;
			regex.zip['nl'].test('1234AA').should.be.true;
		});

		it("Polland", function() {
			regex.zip['pl'].test('12-123').should.be.true;
		});

		it("Spain", function() {
			regex.zip['es'].test('01123').should.be.true;
			regex.zip['es'].test('50123').should.be.true;
		});

		it("Sweden", function() {
			regex.zip['se'].test('12312').should.be.true;
			regex.zip['se'].test('123 12').should.be.true;
		});
		it("United States of America", function() {
			regex.zip['us'].test('12135').should.be.true;
			regex.zip['us'].test('12135-4342').should.be.true;
		});
	});
});