var apiai = require('apiai');
var api = apiai("8b76ed3401c845e9bca1aebfbf91e4e1");
 
module.exports.getResponseFromKruti = function(msgFromUser,session_id,callback){
    var request = api.textRequest(msgFromUser, {
        sessionId: session_id
    });
    request.on('response', function(response) {
        callback(200,'Response from API: ',response);
    });
    
     request.on('error', function(error) {
        //console.log(error);
        callback(404,'Error from API: ',error);
    }); 
    request.end();
}