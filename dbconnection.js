const dbconn = require('pg').Pool
const client = new dbconn({
  user: 'scuvztncqzsajt',
  host: 'ec2-35-170-21-76.compute-1.amazonaws.com',
  database: 'dcak220kvak5lc',
  password: 'f1ed3fde2a1579e001940cdd7322406266cb490d5dabbae03b281a5ace8b9228',
  port: 5432,
  ssl:{
    rejectUnauthorized: false  
}
});


module.exports=client;