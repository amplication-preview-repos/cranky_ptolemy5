import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MetricsModuleBase } from "./base/metrics.module.base";
import { MetricsService } from "./metrics.service";
import { MetricsController } from "./metrics.controller";
import { MetricsResolver } from "./metrics.resolver";

@Module({
  imports: [MetricsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MetricsController],
  providers: [MetricsService, MetricsResolver],
  exports: [MetricsService],
})
export class MetricsModule {}
