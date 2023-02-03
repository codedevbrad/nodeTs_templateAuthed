/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import mongoose, { ConnectOptions } from "mongoose";

const databaseConnection = ( )  => {
        const db : any = process.env.DB_ATLAS_dev;
        // connect to atlas.
        // let dbConnection : any;
        // if ( process.env.NODE_ENV == 'development' ) dbConnection = process.env.DB_ATLAS_dev;
        // if ( process.env.NODE_ENV == 'production'  ) dbConnection = process.env.DB_ATLAS_prod;

        return mongoose.connect( 
            db , 
            { useNewUrlParser: true } as ConnectOptions )
}

export {
    databaseConnection
}