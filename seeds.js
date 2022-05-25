const   mongoose    =   require('mongoose'),
        Print       =   require('./models/print'),
        Comment     =   require('./models/comment');

function seedDB(){
    Print.remove({},function(err){
        if(err){
            console.log(err)
        } else {
            console.log('Data removal complete');
        }
    });
}

module.exports = seedDB;