import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Role } from '../../role/shema/role.schema';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: SchemaTypes.String, unique: true })
  userName: string;

  @Prop({ type: SchemaTypes.String, unique: true })
  email: string;

  @Prop({ type: SchemaTypes.String, unique: true })
  login: string;

  @Prop({ type: SchemaTypes.String })
  password: string;

  @Prop({ type: SchemaTypes.String })
  firstName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  role: Role;

  @Prop({ type: SchemaTypes.String })
  phone: string;

  @Prop({ type: SchemaTypes.Boolean })
  isActivated: boolean;

  @Prop({ type: SchemaTypes.Date })
  dob: Date;

  @Prop({ type: SchemaTypes.String, defaultOptions: 'image' })
  imagePath: string;

  @Prop({ type: SchemaTypes.String, unique: true })
  activatedURL: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
