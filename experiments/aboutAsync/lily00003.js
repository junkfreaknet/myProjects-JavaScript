
var int1=0;
var int2=0;

//callback version
function set_int(a,b,callback){
    
    setTimeout(() => {
        int1=a;
        int2=b;
        callback();
        }, 1000);

}

function sum_int(){

    console.log(int1+int2);

}

set_int(1,2,sum_int);

