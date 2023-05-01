
function listAllProperties(o){

    var objectToInspect;
    var result=[];

    for(objectToInspect=o;objectToInspect!=null;
        objectToInspect=Object.getPrototypeOf(objectToInspect)){

            result=result.concat(
                Object.getOwnPropertyNames(objectToInspect)
            );
    }

    return result;
}


var myCar=new Object();

myCar.make='Ford';
myCar.model='Mustang';
myCar.year='1969';

console.log(listAllProperties(myCar));