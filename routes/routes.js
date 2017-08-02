// app/routes.js
 
module.exports = function(app,path,krutiai) {
    
    app.post('/getResponse', function(req, res) {
        console.log('dataa',req.body)
        krutiai.getResponseFromKruti(req.body.typedInput,'Tml0ZWVuIEF1dGFkZQ==',function(statusCode,status,response){
            if(statusCode==200)res.json(response);
            else console.log(status,response);
        });
    });
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/../src/app/dist/index.html'));
    });

    
};
