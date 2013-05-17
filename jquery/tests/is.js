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