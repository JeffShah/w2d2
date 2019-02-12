let express = require ("express");
let expressServer = express();

const PORT = 8080; //const so the value is unchangable from 8000 to 8080 as vagrant didn't pick up,
//8001 was also not working, just vagrant configration, nothing to do with ports etc

expressServer.get("/" , function(req, res ){ //why .get was used here?
res.send('this is the home page');

});

expressServer.get("/users", function(req, res ){
  res.send('this is the user page');
});

expressServer.listen( PORT, function(){

})
console.log('Express server listening to port', PORT);

});










// what is mvc = model view controller?
//now after this, run in the terminal node install express

//check word file, after this drill
