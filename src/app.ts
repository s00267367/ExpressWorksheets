import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars';
import {env} from './config/env';
import {connectDB} from './config/database';
import {authenticateKey} from './middleware/auth.middleware';
const PORT = env.port;



const app: Application = express();
app.use(authenticateKey);
app.use(express.json());
app.use('/api/v1/cars', carRoutes);
app.use((req, _res, next) => {  
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

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
