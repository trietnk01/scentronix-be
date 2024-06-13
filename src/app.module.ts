import { AppService } from "@/app.service";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ServersModule } from "./servers/servers.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.local", ".env.test", ".env.production"]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (confService: ConfigService) => ({
        uri: confService.get<string>("MONGODB_URI")
      }),
      inject: [ConfigService]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req, res }) => ({ req, res })
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    }),
    ServersModule
  ],
  providers: [AppService]
})
export class AppModule {}
