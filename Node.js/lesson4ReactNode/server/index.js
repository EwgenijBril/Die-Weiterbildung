import express from "express";

const app = express();

const PORT = 2000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))