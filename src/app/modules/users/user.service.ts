// create user

import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";


const createUser = async (user: IUser) => {

    const createdUser = await User.create(user);
    if (!createdUser) {
        throw new ApiError(400, 'Failed to create');
      }
      return createdUser;
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