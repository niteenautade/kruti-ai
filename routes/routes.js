// app/routes.js
var apiai = require('apiai');
var api = apiai("8b76ed3401c845e9bca1aebfbf91e4e1");
 
module.exports = function(app,path,krutiai) {
    
    app.post('/getResponse', function(req, res) {
        console.log('dataa',req.body)
        krutiai.getResponseFromKruti(req.body.typedInput,'Tml0ZWVuIEF1dGFkZQ==',res);
    });
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/../src/app/dist/index.html'));
    });

    
};
