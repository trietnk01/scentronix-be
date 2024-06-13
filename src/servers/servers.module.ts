import { Module } from "@nestjs/common";
import { ServersService } from "./servers.service";
import { ServersResolver } from "./servers.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { ServersMongoose, ServersSchema } from "./schemas/servers.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: ServersMongoose.name, schema: ServersSchema }])],
  providers: [ServersResolver, ServersService]
})
export class ServersModule {}
