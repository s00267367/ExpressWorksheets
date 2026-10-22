import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars';
import {logURL} from './middleware/log.middleware';
import { swaggerSpec } from "./config/swagger";
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from "./middleware/error.middleware";
//import { authenticateKey } from "./middleware/auth.middleware";
//import {authenticateKey} from './middleware/auth.middleware';




export const app: Application = express();

app.use(express.json());
app.use('/api/v1/cars', logURL, carRoutes);
app.use(logURL);
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerSpec)
);
app.use(errorHandler);
  


app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "Hello from Kaelum's server" 
    });
});
app.get('/bananas', async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});
app.get('/Stormlight', async (_req : Request, res: Response) => {
    res.json({
    message: "Life Before Death, Strength Before Weakness, Journey Before Destination",
    });
});

app.get("/pong", (_req : Request, _res: Response) => {
    console.log("Received request to /pong");
    throw new Error("Simulated error in /pong route");
});

app.get("/pung", async (_req : Request, _res: Response) => {
    console.log("Received request to /pung");
     throw new Error("Simulated error in /pung route");
});


