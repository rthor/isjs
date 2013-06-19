chai.should();

describe('Works when the value is as html', function() {
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
			$.is('123412341234123', 'cc:any').should.be.true;
			$.is('1234123412341234', 'cc:any').should.be.true;
		});

		it("Works for American Express", function() {
			$.is('3412312345654526', 'cc:AmericanExpress');
			$.is('3712312345654526', 'cc:AmericanExpress');
		});

		it("Works for Discover", function() {
			$.is('6011123456123456', 'cc:Discover');
		});

		it("Works for MasterCard", function() {
			$.is('5112345671234567', 'cc:MasterCard');
			$.is('5212345671234567', 'cc:MasterCard');
			$.is('5312345671234567', 'cc:MasterCard');
			$.is('5412345671234567', 'cc:MasterCard');
			$.is('5512345671234567', 'cc:MasterCard');
		});

		it("Works for Visa", function() {
			$.is('4000123412341234', 'cc:Visa');
		});
	});

	describe("Date and time", function() {
		it("Format: 1996-12-19T16:39:57-08:00", function() {
			$.is('1996-12-19T16:39:57-08:00', 'datetime').should.be.true;
		});
	});

	describe("ISBN", function() {
		it("ISBN 10", function() {
			$.is('0-85131-041-9', 'isbn').should.be.true;
			$.is('0851310419', 'isbn').should.be.true;
		});

		it("ISBN 13", function() {
			$.is('978-1-56619-909-4', 'isbn').should.be.true;
			$.is('9781566199094', 'isbn').should.be.true;
		});
	});

	describe("Latitude and longitude", function() {
		it("Latitude", function() {
			$.is('64.163296', 'latlng');
		});

		it("Longitude", function() {
			$.is('-21.859328', 'latlng');
		});
	});

	describe("Phone numbers", function() {
		it("France", function() {
			$.is('0423 23 12 24', 'phone:fr');
			$.is('+33423 23 12 24', 'phone:fr');
			$.is('0033423 23 12 24', 'phone:fr');
		});

		it("Iceland", function() {
			$.is('123-4567', 'phone:is').should.be.true;
			$.is('+354 123-4567', 'phone:is').should.be.true;
		});

		it("United Kingdom", function() {
			$.is('12345 123456', 'phone:uk');
		});

		it("United States of America", function() {
			$.is('123-456-7890', 'phone:us');
		});
	});

	describe("Zip codes for countries", function() {
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
	describe("Passing a regex instead of a string", function() {
		it("12-12 should match /\\d{2}-\\d{2}/", function() {
			$.is('12-12', /\d{2}-\d{2}/).should.be.true;
		});
		it("1-1 should not match /\\d{2}-\\d{2}/", function() {
			$.is('1-1', /\d{2}-\d{2}/).should.be.false;
		});
	});
	describe("Function Tests", function() {
		it("greater than 100", function() {
			$.is(200, 'testing').should.be.true;
		});
	});
});