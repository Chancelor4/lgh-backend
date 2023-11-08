// create user

import ApiError from "../../../errors/ApiError";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";


// Create a user
const createUser = async (user: IUser ,student:IStudent) => {
  //  student create korbo
    console.log("user",user);
    console.log("student",student);
  const createdStudent = await Student.create(student);  

  if (!createdStudent) {
    throw new ApiError(400, 'Failed to create');
  }
   user.studentId = createdStudent._id;
  const createdUser = (await User.create(user)).populate('studentId');
    if (!createdUser) {
        throw new ApiError(400, 'Failed to create');
      }
      return createdUser;
   
   
}
const getAllUser = async () => {

    const createdUser = await User.find();
    if (!createdUser) {
        throw new ApiError(400, 'Failed to Get');
      }
    return createdUser;
   
}
export const UserService = {
createUser,
getAllUser
}