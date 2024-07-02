import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MetricsService } from "./metrics.service";
import { MetricsControllerBase } from "./base/metrics.controller.base";

@swagger.ApiTags("metrics")
@common.Controller("metrics")
export class MetricsController extends MetricsControllerBase {
  constructor(
    protected readonly service: MetricsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
