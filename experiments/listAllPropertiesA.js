
//list up all properties

function listUpAllProperties(o){

    var objToInspect;
    var result=[];

    for(objToInspect=o;
        objToInspect!=null;
        objToInspect=Object.getPrototypeof(objToInspect))
        {
            result=result.concat(
                Object.getOwnPropertyNames(objToInspect)
            );
        }
     return result;
}

var tesObj=new Object[{p1:1,
            p2:2,
            p3:3,
            p4:4,
            p5:5,
            p6:6,
            p7:7,
            p8:8,
            p9:9
            }];
/*
            var tesObj={p1:1,
                p2:2,
                p3:3,
                p4:4,
                p5:5,
                p6:6,
                p7:7,
                p8:8,
                p9:9
                };
*/
var recieveBuff;

recieveBuff=listUpAllProperties(tesObj);

console.log(recieveBuff);