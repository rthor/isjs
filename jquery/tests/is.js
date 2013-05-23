test('Works when the value is as html', function() {
	var p = $('</p>').text('john.doe@company.com');
	ok( p.is('email') , 'works on p tags' );
});
test('Works when the value is as value', function() {
	var p = $('<input>').val('john.doe@company.com');
	ok( p.is('email') , 'works on input tags' );
});
test('Works on strings', function() {
	ok( $.is('john.doe@company.com', 'email') , 'works on strings' );
});

test('Zip codes should work', function() {
	ok( ! $.is('12', 'zip:is'), 'should fail' );
	ok( $.is('112', 'zip:is'), 'should work' );
	ok( ! $.is('112145', 'zip:is'), 'should fail' );
});