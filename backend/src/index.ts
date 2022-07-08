import * as express from "express";
import {Request, Response} from "express";
var cors = require('cors');
import { AppDataSource } from "./data-source"
import { users_test_sergio_cervantes } from "./entity/Users"

AppDataSource.initialize().then(async () => {
    // create and setup express app
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get("/users", async function(req: Request, res: Response) {
        const results = await AppDataSource.getRepository(users_test_sergio_cervantes).find();
        return res.send(results);
    });

    app.get("/user/:id", async function(req: Request, res: Response) {
        const results = await AppDataSource.getRepository(users_test_sergio_cervantes).findOneBy({
            id: parseInt(req.params.id)
        });
        return res.send(results);
    });

    app.post("/user", async function(req: Request, res: Response) {
        const user = await AppDataSource.getRepository(users_test_sergio_cervantes).create(req.body);
        const results = await AppDataSource.getRepository(users_test_sergio_cervantes).save(user);
        return res.send(results);
    });

    app.put("/user/:id", async function(req: Request, res: Response) {
        const user = await AppDataSource.getRepository(users_test_sergio_cervantes).findOneBy({
            id: parseInt(req.params.id),
        })
        AppDataSource.getRepository(users_test_sergio_cervantes).merge(user, req.body)
        const results = await AppDataSource.getRepository(users_test_sergio_cervantes).save(user)
        return res.send(results)
    });

    app.delete("/user/:id", async function(req: Request, res: Response) {
        const results = await AppDataSource.getRepository(users_test_sergio_cervantes).delete(req.params.id)
        return res.send(results)
    });

    // start express server
    app.listen(3001);
    console.log("App running on port 3001")
}).catch(error => console.log(error))
