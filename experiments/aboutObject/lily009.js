const res = require("express/lib/response");

doSomething()
    .then(function(result){
        return doSomethingElse(result);
    })
    .then(function(newResult){
        return doThirdThing(newResult);
    })
    .then(function(finalResult){
        console.log("Got the final result:"+finalResult);
    })
    .cahch(failureCallback);

//

doSomething()
    .then((result)=>doSomethingElse(result))
    .then((newResult)=>doThirdThing(newResult))
    .then((finalResult)=>{
        console.log("got the final result:${finalResult}");
    })
    .catch(failureCallback);