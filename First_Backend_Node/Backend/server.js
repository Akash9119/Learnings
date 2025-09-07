import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/' , (req, res) => {
    res.send("Hello World");
})


app.get('/api/data' , (req,res) => {
    res.send([
        {
            id: 1,
            title: "title 1",
            desc: "discription 1",
        },
        {
            id: 2,
            title: "title 2",
            desc: "discription 2",
        },
        {
            id: 3,
            title: "title 3",
            desc: "discription 3",
        }
    ])
});


app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});