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
		check.fn.ok( true ).should.be.true;
	});

	it('regexp', function() {
		check.fn.regexp( /love?/ ).should.be.true;
	});

	it('function', function() {
		check.fn.function(function () {
			return 'I am a function - Deal with it!';
		}).should.be.true;
	});

	it('even', function() {
		check.fn.even( 234 ).should.be.true;
	});

	it('odd', function() {
		check.fn.odd( 533 ).should.be.true;
	});

	it('luhn', function() {
		check.fn.luhn( 1234567812345670 ).should.be.true;
	});
});

describe("Regular expression keywords", function() {

	describe("Credit cards", function() {
		it("Works for any credit card", function() {
			check.cc['any'].test('123412341234123', 'cc:any').should.be.true;
			check.cc['any'].test('1234123412341234', 'cc:any').should.be.true;
		});

		it("Works for American Express", function() {
			check.cc['AmericanExpress'].test('3412312345654526').should.be.true;
			check.cc['AmericanExpress'].test('3712312345654526').should.be.true;
		});

		it("Works for Discover", function() {
			check.cc['Discover'].test('6011123456123456').should.be.true;
		});

		it("Works for MasterCard", function() {
			check.cc['MasterCard'].test('5112345671234567').should.be.true;
			check.cc['MasterCard'].test('5212345671234567').should.be.true;
			check.cc['MasterCard'].test('5312345671234567').should.be.true;
			check.cc['MasterCard'].test('5412345671234567').should.be.true;
			check.cc['MasterCard'].test('5512345671234567').should.be.true;
		});

		it("Works for Visa", function() {
			check.cc['Visa'].test('4000123412341234').should.be.true;
		});
	});

	describe("Date and time", function() {
		it("Format: 1996-12-19T16:39:57-08:00", function() {
			check.datetime.test('1996-12-19T16:39:57-08:00').should.be.true;
		});
	});

	describe("ISBN", function() {
		it("ISBN 10", function() {
			check.isbn.test('0-85131-041-9').should.be.true;
			check.isbn.test('0851310419').should.be.true;
		});

		it("ISBN 13", function() {
			check.isbn.test('978-1-56619-909-4').should.be.true;
			check.isbn.test('9781566199094').should.be.true;
		});
	});

	describe("Latitude and longitude", function() {
		it("Latitude", function() {
			check.latlng.test('64.163296').should.be.true;
		});

		it("Longitude", function() {
			check.latlng.test('-21.859328').should.be.true;
		});
	});

	describe("Phone numbers", function() {
		it("Argentina", function() {
			check.phone['ar'].test('+54 2345-6789').should.be.true;
			check.phone['ar'].test('2345-6789').should.be.true;
			check.phone['ar'].test('23456789').should.be.true;
		});

		it("Australia", function() {
			check.phone['au'].test('+61 8 4550 8955').should.be.true;
			check.phone['au'].test('061 8 4550 8955').should.be.true;
			check.phone['au'].test('8 4550 8955').should.be.true;
		});

		it("France", function() {
			check.phone['fr'].test('0423 23 12 24').should.be.true;
			check.phone['fr'].test('+33423 23 12 24').should.be.true;
			check.phone['fr'].test('0033423 23 12 24').should.be.true;
		});

		it("Iceland", function() {
			check.phone['is'].test('123-4567').should.be.true;
			check.phone['is'].test('+354 123-4567').should.be.true;
		});

		it("United Kingdom", function() {
			check.phone['uk'].test('12345 123456').should.be.true;
		});

		it("United States of America", function() {
			check.phone['us'].test('123-456-7890').should.be.true;
		});
	});

	describe("Zip codes for countries", function() {
		it("Argentina", function() {
			check.zip['ar'].test('1122').should.be.true;
		});

		it("Australia", function() {
			check.zip['au'].test('1122').should.be.true;
		});

		it("Austria", function() {
			check.zip['at'].test('1122').should.be.true;
		});

		it("Belgium", function() {
			check.zip['be'].test('1122').should.be.true;
		});

		it("Brazil", function() {
			check.zip['br'].test('25251-121').should.be.true;
		});

		it("Bulgaria", function() {
			check.zip['bg'].test('5094').should.be.true;
		});

		it("Canada", function() {
			check.zip['ca'].test('K2A 7B7').should.be.true;
		});

		it("Croatia", function() {
			check.zip['hr'].test('10000').should.be.true;
		});

		it("Cyprus", function() {
			check.zip['cy'].test('8501').should.be.true;
		});

		it("Czech Republic", function() {
			check.zip['cz'].test('160 00').should.be.true;
		});

		it("Denmark", function() {
			check.zip['dk'].test('123').should.be.true;
			check.zip['dk'].test('1234').should.be.true;
		});

		it("Estonia", function() {
			check.zip['ee'].test('42106').should.be.true;
		});

		it("Finland", function() {
			check.zip['fi'].test('55100').should.be.true;
		});

		it("France", function() {
			check.zip['fr'].test('52110').should.be.true;
		});

		it("Germany", function() {
			check.zip['de'].test('12345').should.be.true;
		});

		it("Great Britain", function() {
			check.zip['gb'].test('gj5g 5hh').should.be.true;
			check.zip['gb'].test('h7u 5hh').should.be.true;
			check.zip['gb'].test('h7 5hh').should.be.true;
			check.zip['gb'].test('h76 5hh').should.be.true;
			check.zip['gb'].test('hf6 5hh').should.be.true;
			check.zip['gb'].test('hf63 5hh').should.be.true;
		});

		it("Greece", function() {
			check.zip['gr'].test('681 00').should.be.true;
		});

		it("Hungary", function() {
			check.zip['hu'].test('1234').should.be.true;
		});

		it("Iceland", function() {
			check.zip['is'].test('112').should.be.true;
		});

		it("Italy", function() {
			check.zip['it'].test('12345').should.be.true;
		});

		it("Japan", function() {
			check.zip['jp'].test('123-1234').should.be.true;
		});

		it("Latvia", function() {
			check.zip['lv'].test('LV-3701').should.be.true;
		});

		it("Lithuania", function() {
			check.zip['lt'].test('73461').should.be.true;
		});

		it("Luxembourg", function() {
			check.zip['lu'].test('L-1234').should.be.true;
		});

		it("Malta", function() {
			check.zip['mt'].test('BBG 1014').should.be.true;
		});

		it("Netherlands", function() {
			check.zip['nl'].test('1234 aG').should.be.true;
			check.zip['nl'].test('1234AA').should.be.true;
		});

		it("Norway", function() {
			check.zip['no'].test('0001').should.be.true;
		});

		it("Poland", function() {
			check.zip['pl'].test('12-123').should.be.true;
		});

		it("Portugal", function() {
			check.zip['pt'].test('1050').should.be.true;
		});

		it("Romania", function() {
			check.zip['ro'].test('827019').should.be.true;
		});

		it("Slovakia", function() {
			check.zip['sk'].test('811 02').should.be.true;
			check.zip['sk'].test('SK-811 02').should.be.true;
		});

		it("Slovenia", function() {
			check.zip['si'].test('1233').should.be.true;
		});

		it("Spain", function() {
			check.zip['es'].test('01123').should.be.true;
			check.zip['es'].test('50123').should.be.true;
		});

		it("Sweden", function() {
			check.zip['se'].test('12312').should.be.true;
			check.zip['se'].test('123 12').should.be.true;
		});

		it("Turkey", function() {
			check.zip['tr'].test('21500').should.be.true;
		});

		it("United States of America", function() {
			check.zip['us'].test('12135').should.be.true;
			check.zip['us'].test('12135-4342').should.be.true;
		});

		if("Ukraine", function() {
			check.zip['ua'].test('27420').should.be.true;
		});
	});
});