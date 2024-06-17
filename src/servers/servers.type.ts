import { Field, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
@ObjectType()
class IServers {
  @Field((type) => String, { nullable: true })
  _id: ObjectId;

  @Field((type) => String, { nullable: true })
  url: string;

  @Field((type) => String, { nullable: true })
  priority: string;
}
@ObjectType()
export class ServersType {
  @Field((type) => IServers, { nullable: true })
  item: IServers;
}
