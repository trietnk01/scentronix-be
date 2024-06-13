import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId } from "mongoose";

export type ServersDocument = HydratedDocument<ServersMongoose>;

@Schema({ collection: "servers" })
export class ServersMongoose {
  @Prop()
  url: string;

  @Prop()
  priority: string;
}

export const ServersSchema = SchemaFactory.createForClass(ServersMongoose);
