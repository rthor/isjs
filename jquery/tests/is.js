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
		it("Works for credit cards", function() {
			$.is('1234123412341234', 'cc').should.be.true;
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
		it("Iceland - format: ###-####", function() {
			$.is('1212525', 'phone').should.be.true;
			$.is('121 2525', 'phone').should.be.true;
			$.is('121 -2525', 'phone').should.be.true;
			$.is('121- 2525', 'phone').should.be.true;
			$.is('121 - 2525', 'phone').should.be.true;
			$.is('121-2525', 'phone').should.be.true;
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
});