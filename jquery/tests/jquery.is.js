var should = chai.should();
var assert = chai.assert;

describe('jQuery.is plugin', function() {
	// it('should return a boolean value', function() {
	// 	assert.isBoolean($('<p>Hi</p>').is('cc'), 'is not a credit card');
	// 	assert.isBoolean($('<p>4548900000928780</p>').is('cc'), 'is a credit card');
	// });

	describe('Email validation', function() {
		it("should work on p tags", function() {
			$('<p>ragnar.valgeirsson@gmail.com</p>').is('email').should.be.true;
		});
	});
});