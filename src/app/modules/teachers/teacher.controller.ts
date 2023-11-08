import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

import { IUser } from './teacher.interface';
import { UserService } from './teacher.service';
import { sendSuccessResponse } from '../../../shared/customResponse';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const  {student ,... userData}  = req.body;
    const result = await UserService.createUser(userData ,student);

    sendSuccessResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

const getUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
 
    const result = await UserService.getAllUser();

    sendSuccessResponse<IUser[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user retrive successfully!',
      data: result,
    });
  }
);


export const UserController = {
  createUser,
  getUser
};
