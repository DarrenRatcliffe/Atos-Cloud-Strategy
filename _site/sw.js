importScripts( 'http://acs.apps.eu01.cf.canopy-cloud.com//cache-polyfill.js' );

var filesToCache = [
  // root
  'http://acs.apps.eu01.cf.canopy-cloud.com//',
  'http://acs.apps.eu01.cf.canopy-cloud.com//index.html',
  // css
  'http://acs.apps.eu01.cf.canopy-cloud.com//assets/css/main.css',
  'http://acs.apps.eu01.cf.canopy-cloud.com//assets/css/normalize.css',
  'http://acs.apps.eu01.cf.canopy-cloud.com//assets/css/syntax.css',
  // images
  'http://acs.apps.eu01.cf.canopy-cloud.com//assets/img/octocat.png',
  // pages
  'http://acs.apps.eu01.cf.canopy-cloud.com//digital_tranformation','http://acs.apps.eu01.cf.canopy-cloud.com//example_page/','http://acs.apps.eu01.cf.canopy-cloud.com//jekyll/update/2013/11/20/welcome-to-jekyll.html',
  // posts
  'http://acs.apps.eu01.cf.canopy-cloud.com//jekyll/update/2013/11/20/welcome-to-jekyll.html',
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
