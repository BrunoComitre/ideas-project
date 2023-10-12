import { Express, Request, Response } from "express";

const app = Express();
app.use(Express.json());

interface RequestBody {
    name: string;
    age: number;
}

app.post("/", (req: Request, res: Response) => {
    const user: RequestBody = req.body;

    return res.send({
        message: `Hello ${user.name}! You are ${user.age} years old.`
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
