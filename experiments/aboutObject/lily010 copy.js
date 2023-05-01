

new Promise((okCallback,failureCallback)=>{

    const mysql=require('mysql');
    const mysqlConnection=mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    });

    const nameTable="select_locale_child_202212011001_cp_csv";

    mysqlConnection.connect((err)=>{
        if(err){ 
            console.log("error connect.")
            throw err;
        }
        console.log("connected!!!");

        //
        const stringSQL="select * from "+nameTable+";";
        mysqlConnection.query(stringSQL,(err,rows)=>{
            if(err){
                throw err;
            }
            console.log(rows);
        });
        //
        mysqlConnection.end();
        console.log("end connect.")
    })
    //console.log("start remote database access.");


    //console.log("end remote dtabase access.");
})
.then((okarg)=>{
    console.log("end successfully.");
})
.catch((errarg)=>{
    console.log("end with error.");
})