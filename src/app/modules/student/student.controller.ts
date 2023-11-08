


// const createUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const  user  = req.body;
//     const result = await UserService.createUser(user);

import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { sendSuccessResponse } from "../../../shared/customResponse";
import { IStudent } from "./student.interface";
import httpStatus from "http-status";
import { StudentService } from "./student.service";

//     sendSuccessResponse<IUser>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'user created successfully!',
//       data: result,
//     });
//   }
// );

const getStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
 
    const result = await StudentService.getAllUser();

    sendSuccessResponse<IStudent[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrive successfully!',
      data: result,
    });
  }
);


export const UserController = {
  getStudent
};
