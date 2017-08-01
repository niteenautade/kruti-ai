var apiai = require('apiai');
var api = apiai("8b76ed3401c845e9bca1aebfbf91e4e1");
 
module.exports.getResponseFromKruti = function(msgFromUser,session_id,res){
    var data;
    var request = api.textRequest(msgFromUser, {
        sessionId: session_id
    });
    request.on('response', function(response) {
        console.log(response);
        res.json(response);
    });
    
    request.on('error', function(error) {
        console.log(error);
    });
    console.log('dataa',this.data);
    request.end();
}