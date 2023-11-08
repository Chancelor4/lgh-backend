// create user

import ApiError from "../../../errors/ApiError";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";


// const createUser = async (user: IUser ,student:IStudent) => {

//     const createdUser = await User.create(user);
//     if (!createdUser) {
//         throw new ApiError(400, 'Failed to create');
//       }
//       return createdUser;
//     return createdUser;
   
// }
const getAllUser = async () => {

    const createdUser = await Student.find();
    if (!createdUser) {
        throw new ApiError(400, 'Failed to Get');
      }
    return createdUser;
   
}
export const StudentService = {

getAllUser
}