let http = require( 'http' );
const PORT = 3000;
let resources = { //we will have a name for our resource
  '/toronto' : 'Currently snowy'  //toronto is location here and value is currently snowy
  '/vancouver' : 'Super old and rainy',
  '/miami' : 'Sunny';
  '/losangles' : 'Chilly',
// all this is called, list og resources

};

function handleRequest( request, response ) {
  if ( resources [request.url ] ) {
    response.end( resource [request.url]);
  }
  else {
    response.statusCode = 404;
    response.end('Location not available');
  }
}

let httpserver = http.createServer ( handleRequest) ;


httpServer.listen( PORT , function() {
console.log("HTTP server listening on port", PORT);


});

//go to terminal, run the code by npm install/i
// go to the browswer and write: localhost3000/toronto and see the output
//127.0.0.1:3000/toronto etc.
