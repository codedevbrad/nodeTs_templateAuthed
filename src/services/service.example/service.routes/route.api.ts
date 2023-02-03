/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router , Application , Request , Response , NextFunction } from 'express';
import { asyncHandler } from '../../../utils/asyncHandler';
  
// import { AuthUser , AuthUserQueries } from '../../service.user/index';

// const { finderQueries , mutableAuthQueries } = AuthUserQueries;

// / service / example / 

const feature_api = Router();

// feature_api.use( authenticateTokenMiddleware );

feature_api.get( '/' , asyncHandler ( async ( req: Request , res: Response  ) => {
    // const users = await finderQueries.getUserByUsername('somedude'); 
    res.status(201).json({
        route: '/ service / example / ' , 
         data: 'users'
    });
}));



export default feature_api; 