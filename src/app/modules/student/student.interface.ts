import { Model, Types } from 'mongoose';

export type IUser = {
  id: string;
  role: string;
  password: string;
  studentId?: Types.ObjectId;
  parentId?: Types.ObjectId;
  teacherId?: Types.ObjectId;
  
};
export type UserModel = Model<IUser, Record<string, unknown>>;
