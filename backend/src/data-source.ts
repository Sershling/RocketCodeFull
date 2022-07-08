import "reflect-metadata"
import { DataSource } from "typeorm"
import { users_test_sergio_cervantes } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com",
    port: 3306,
    username: "testing",
    password: "Pruebas%ALI%2020",
    database: "testing_ali_fullstack",
    synchronize: true,
    logging: false,
    entities: [users_test_sergio_cervantes],
    migrations: [],
    subscribers: [],
})
