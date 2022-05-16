'use strict';
const app = require('./express/server');
const path = require('path');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Local request handlers.
app.get('/', (req, res) => {
  res.render('index');
  res.send('Hello World!')  
});
app.get('/asdf', (req, res) => {
  res.send('Hello World!')  
});


let page1 = require('./routes/page1');
app.use('/page1', page1);

// Start Server.
let port = 3005;
app.listen(port, function(){
  console.log(`Server started on port ${port}...`);
});