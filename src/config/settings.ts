/* eslint-disable no-console */
import express  , { Application } from 'express';
import cors    from 'cors';
import morgan  from 'morgan';

const SETUP_development = ( app : Application ) : void => {
    // dev
    if ( process.env.NODE_ENV === "development" ) {
         console.log('dev: morgan logging')
         app.use( morgan('dev') );
    }
};

const SETUP_middleware = ( app : Application ) : void => {
    // body parser middleware
    app.use( express.urlencoded({ extended: true }))
    app.use( express.json());
    app.use( cors());
}

export {
    SETUP_middleware , SETUP_development
}