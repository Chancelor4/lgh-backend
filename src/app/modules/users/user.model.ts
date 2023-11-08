import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    studentId:{
      type: Schema.Types.ObjectId,
      ref: 'Student', //collection name as
    },
    parentId:{
      type: Schema.Types.ObjectId,
      ref: 'Parent', //collection name as
    },
    facilitatorId:{
      type: Schema.Types.ObjectId,
      ref: 'Facilitator', //collection name as
    },
    },


);
export const User = model<IUser, UserModel>('User', userSchema);
