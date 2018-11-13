const hysterix = require('hystrixjs');
const request = require('request');


module.exports.makeApiCall = function (){

    let CommandsFactory = hysterix.commandFactory;
    let serviceCommand = CommandsFactory.getOrCreate("unique id for a service")
    .run(makeRequest)
    .build();

    var promise = serviceCommand.execute('http://localhost:3001/');
    console.log('Promise returned');
    return promise;
}

makeRequest = function(url) {
    console.log('In request method');
    return new Promise(function(resolve, reject) {
    request(url, function (err, resp, body) {
        console.log('Request completed')
        if(err){
            console.log('error:', err);
            reject(err);
        }
        else {
            console.log('Request successful')
            const data = {
                'id': 1
            };
            resolve(body);
        }
      });
    });

}