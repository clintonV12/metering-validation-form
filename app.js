const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors("*"));  

//App routes
app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));