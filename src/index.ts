import { app } from './serve';
import {env} from './env'
//routes register

 import { router as profesores } from './controller/routes/profesor';



app.use('/api/personal',profesores);


app.listen(env.PORT, () => {
    console.log(`API-USER  started on port ${env.PORT}`);
})