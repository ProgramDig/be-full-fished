import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop({ type: SchemaTypes.String, unique: true })
  value: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
