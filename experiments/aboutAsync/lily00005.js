
var int1=0;
var int2=0;

//promise version
function set_int(a,b){
    

    
    return new Promise(function(resolv,reject){
        setTimeout(function() {
            int1=a;
            int2=b;
            resolv();
            }, 1000);
    });

}

function sum_int(){

    console.log(int1+int2);

}

set_int(1,2).then(function(){

    sum_int();

});

set_int(1,2).catch(function(){

    console.log("...error occured.");
    
})