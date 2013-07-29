chai.should();

describe('jQuery Plugin', function() {
	it("should work on paragraph elements", function() {
		var p = $('</p>').text('john.doe@company.com');
		p.is('email').should.be.true;
	});

	it('should work on input elements', function() {
		var input = $('<input>').val('john.doe@company.com');
		input.is('email').should.be.true;
	});

	it("should work on strings", function() {
		$.is('john.doe@company.com', 'email').should.be.true;
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
		it("Argentina - format: ####", function() {
			$.is('1122', 'zip:ar').should.be.true;
		});

		it("Australia - format: ####", function() {
			$.is('1122', 'zip:au').should.be.true;
		});

		it("Austria - format: ####", function() {
			$.is('1122', 'zip:at').should.be.true;
		});

		it("Belgium - format: ####", function() {
			$.is('1122', 'zip:be').should.be.true;
		});

		it("Brazil - format: #####-###", function() {
			$.is('25251-121', 'zip:br').should.be.true;
		});

		it("Canada - format: A#A #A#", function() {
			$.is('K2A 7B7', 'zip:ca').should.be.true;
		});

		it("Danmark - format: ### (or) ####", function() {
			$.is('123', 'zip:dk').should.be.true;
			$.is('1234', 'zip:dk').should.be.true;
		});

		it("Germany - format: #####", function() {
			$.is('12345', 'zip:de').should.be.true;
		});

		it("Great Britain - format: AA#A #AA (or) A#A #AA (or) A# #AA (or) A## #AA (or) AA# #AA (or) AA## #AA", function() {
			$.is('gj5g 5hh', 'zip:gb').should.be.true;
			$.is('h7u 5hh', 'zip:gb').should.be.true;
			$.is('h7 5hh', 'zip:gb').should.be.true;
			$.is('h76 5hh', 'zip:gb').should.be.true;
			$.is('hf6 5hh', 'zip:gb').should.be.true;
			$.is('hf63 5hh', 'zip:gb').should.be.true;
		});


		it("Hungry - format: ####", function() {
			$.is('1234', 'zip:hu').should.be.true;
		});

		it("Iceland - format: ###", function() {
			$.is('112', 'zip:is').should.be.true;
		});

		it("Italy - format: #####", function() {
			$.is('12345', 'zip:it').should.be.true;
		});

		it("Japan - format: ###-####", function() {
			$.is('123-1234', 'zip:jp').should.be.true;
		});

		it("Luxembourg - format: L-####", function() {
			$.is('L-1234', 'zip:lu').should.be.true;
		});

		it("Nertherland - format: 1### AA", function() {
			$.is('1234 aG', 'zip:nl').should.be.true;
			$.is('1234AA', 'zip:nl').should.be.true;
		});

		it("Polland - format: ##-###", function() {
			$.is('12-123', 'zip:pl').should.be.true;
		});

		it("Spain - format: [01-50]###", function() {
			$.is('01123', 'zip:es').should.be.true;
			$.is('50123', 'zip:es').should.be.true;
		});

		it("Sweden - format: ### ##", function() {
			$.is('12312', 'zip:se').should.be.true;
			$.is('123 12', 'zip:se').should.be.true;
		});
		it("United States of America - format: ##### (or) #####-####", function() {
			$.is('12135', 'zip:us').should.be.true;
			$.is('12135-4342', 'zip:us').should.be.true;
		});
	});
});