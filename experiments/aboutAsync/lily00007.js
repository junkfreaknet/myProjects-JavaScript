
var int1=0;
var int2=0;

//async awit version

async function set_int(a,b){

    int1=a;
    int2=b;
    return true;                

}

function sum_int(){

    console.log(int1+int2);

}

async function run_process(){

    set_int(1,3);
    sum_int();
}

run_process();

console.log("end async await");