import { Query, Resolver } from "@nestjs/graphql";
import { ServersService } from "./servers.service";
import { ServersType } from "./servers.type";

@Resolver(() => ServersType)
export class ServersResolver {
  constructor(private readonly serversService: ServersService) {}
  @Query(() => ServersType)
  findServerLowestPriority() {
    return this.serversService.findServerLowestPriority();
  }
}
