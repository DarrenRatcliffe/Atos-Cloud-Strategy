importScripts( '/atos-cloud/cache-polyfill.js' );

var filesToCache = [
  // root
  '/atos-cloud/',
  '/atos-cloud/index.html',
  // css
  '/atos-cloud/assets/css/main.css',
  '/atos-cloud/assets/css/normalize.css',
  '/atos-cloud/assets/css/syntax.css',
  // images
  '/atos-cloud/assets/img/octocat.png',
  // pages
  '/atos-cloud/digital_tranformation','/atos-cloud/example_page/','/atos-cloud/jekyll/update/2013/11/20/welcome-to-jekyll.html',
  // posts
  '/atos-cloud/jekyll/update/2013/11/20/welcome-to-jekyll.html',
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
