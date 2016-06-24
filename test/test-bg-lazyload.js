/*jshint browser: true, undef: true, strict: true, unused: true */
/*globals QUnit, Flickity */
QUnit.test( 'bgLazyLoad', function( assert ) {
  'use strict';

  var done = assert.async();

  var carousel = document.querySelector('.carousel--bg-lazyload')
  var flkty = new Flickity( carousel, {
    bgLazyLoad: 1
  });

  var loadCount = 0;
  flkty.on( 'bgLazyLoad', function( event, elem ) {
    loadCount++;

    assert.equal( event.type, 'load', 'event.type == load' );
    assert.ok( elem, 'elem argument there' );

    // after first 2 have loaded, select 7th cell
    if ( loadCount == 2 ) {
      flkty.select( 6 );
    }
    if ( loadCount == 5 ) {
      var loadedImgs = carousel.querySelectorAll('.flickity-bg-lazyloaded');
      assert.equal( loadedImgs.length, '5', 'only 5 images loaded' );
      done();
    }
  });

});
