const { connect, connection } = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

// ask about this
const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://steveweede:zSp0nGTUGsQetI19@cluster0.pn50s1l.mongodb.net/?retryWrites=true&w=majority';


connect(connectionString);

module.exports = connection;
