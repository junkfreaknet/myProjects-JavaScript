
const privates=new WeakMap();

function Public(){
    const me={
        //place private data here.

    };
    privates.set(this,me);
}

Public.prototype.method=function(){
    const me=privates.get(this);
    //set private data to 'me'

};

__esModule.exports=Public;