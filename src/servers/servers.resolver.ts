import { Query, Resolver } from "@nestjs/graphql";
import { ServersService } from "./servers.service";
import { ServersType } from "./servers.type";
import { ServerType } from "typeorm";

@Resolver(() => ServersType)
export class ServersResolver {
  constructor(private readonly serversService: ServersService) {}
  @Query(() => ServersType)
  findServerLowestPriority() {
    return this.serversService.findServerLowestPriority();
  }
}
