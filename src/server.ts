/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import express , { Application , Request , Response , NextFunction } from 'express';  

import { errorHandler } from './utils/errorHandler';
import { asyncHandler } from './utils/asyncHandler';

import { AuthService } from '@codedevbrad/authservice';

import 'express-async-errors';
import 'dotenv/config';

import { SETUP_middleware , SETUP_development } from './config/settings';
import { databaseConnection } from './config/services';

import api_serviceA from './services/service.example/service.routes/route.api'; 

const app = express();
const port = process.env._PORT || 5000 ;
const server = require('http').createServer( app );

SETUP_middleware( app );
SETUP_development( app );

databaseConnection()
    .then ( ()  => console.log(`mongodb in: ${ process.env.NODE_ENV }`))
    .catch( err => console.log( err ));

AuthService.initialiseAuthService({
    authProvider: 'jwt' , 
    app: app , 
    path: '/auth' , 
    extendModel: {
        isAdmin: { type: Boolean } , 
          email: { type: String }
    },
    register: {
        type: 'basic',
        emailSender: 'codedevbrad@gmail.com'
    }
});

AuthService.initialiseJWTProvider({
    secret: '12345'
});

app.get( '/' , asyncHandler ( async ( req: Request , res: Response , next: NextFunction ) => {
    res.status(200).json( '/' )
}));

app.use('/service' , api_serviceA );

errorHandler( app );

server.listen( port, ( ) => {
    console.log(`service running on ${ port } in ${ process.env.NODE_ENV } `);
});