import Express from "express";
import userRouter from "./routers/userRouter.js"

const app = Express();

app.use(Express.json())

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.use('/users', userRouter);


app.listen(3000, () => {
    console.log("Server iniciado en puerto = app");
})

export default app;