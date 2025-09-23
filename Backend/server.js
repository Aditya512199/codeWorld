//start server

const app = require('./src/app');
connectDB = require('./src/db/db');

connectDB();


app.listen(3000, () => {
    console.log('server is running on port 3000');
})