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

describe("Regexes", function() {
	describe("Zip codes for countries", function() {
		it("Iceland - format: ###", function() {
			$.is('12', 'zip:is').should.be.false;
			$.is('112', 'zip:is').should.be.true;
			$.is('1122', 'zip:is').should.be.false;
		});
	});
});