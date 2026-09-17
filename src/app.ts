import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars';
const PORT = process.env.PORT || 6767;

const app: Application = express();
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




app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });
