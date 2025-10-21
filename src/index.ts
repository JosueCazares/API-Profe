import { app } from './serve';
import {env} from './config/env'
//routes register

 import { router as profesores } from './routes/profesor';



app.use('/api/personal',profesores);


app.listen(env.PORT, () => {
    console.log(`API-USER  started on port ${env.PORT}`);
})