casper.test.begin("Homepage has links to factories and brands", 5, function suite(test){
  casper.start('http://localhost:3000/', function(){
    test.assertSelectorHasText('h1', 'Makers Row');
    test.assertExists('a#factories', '"factories" link is found');
    test.assertSelectorHasText('a#factories', 'Factories');
    test.assertExists('a#brands', '"brands" link is found');
    test.assertSelectorHasText('a#brands', 'Brands');
  });

  casper.run(function() {
    test.done();
  });
});
