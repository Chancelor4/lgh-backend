import { Model, Types } from 'mongoose';

export type IFacilitator = {
  name: string;
  email: string;
  designation: string;
  
};
export type FacilitatorsModel = Model<IFacilitator, Record<string, unknown>>;
