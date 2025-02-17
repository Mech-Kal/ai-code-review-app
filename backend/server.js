require('dotenv').config();
const  app  = require('./src/app.js'); // Import the app object


const port = 3000;
console.log(process.env.GOOGLE_GEMINI_KEY);
app.listen(port, () => {
    console.log(`Server is running on http://Localhost:${port}`);
});