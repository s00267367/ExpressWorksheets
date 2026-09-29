import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars';
import {env} from './config/env';
import {connectDB} from './config/database';
import {logURL} from './middleware/log.middleware';
import { authenticateKey } from "./middleware/auth.middleware";
//import {authenticateKey} from './middleware/auth.middleware';
const PORT = env.port;



const app: Application = express();

app.use(express.json());
app.use('/api/v1/cars',logURL, authenticateKey,  carRoutes);
app.use(logURL);



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



const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
startServer();
