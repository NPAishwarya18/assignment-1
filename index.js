const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

//middle ware
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/blogs',blogRoutes);

const PORT=process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
});