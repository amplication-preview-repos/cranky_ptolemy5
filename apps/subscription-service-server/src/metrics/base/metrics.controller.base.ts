/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MetricsService } from "../metrics.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MetricsCreateInput } from "./MetricsCreateInput";
import { Metrics } from "./Metrics";
import { MetricsFindManyArgs } from "./MetricsFindManyArgs";
import { MetricsWhereUniqueInput } from "./MetricsWhereUniqueInput";
import { MetricsUpdateInput } from "./MetricsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MetricsControllerBase {
  constructor(
    protected readonly service: MetricsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Metrics })
  @nestAccessControl.UseRoles({
    resource: "Metrics",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMetrics(
    @common.Body() data: MetricsCreateInput
  ): Promise<Metrics> {
    return await this.service.createMetrics({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Metrics] })
  @ApiNestedQuery(MetricsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Metrics",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async metricsItems(@common.Req() request: Request): Promise<Metrics[]> {
    const args = plainToClass(MetricsFindManyArgs, request.query);
    return this.service.metricsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Metrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Metrics",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async metrics(
    @common.Param() params: MetricsWhereUniqueInput
  ): Promise<Metrics | null> {
    const result = await this.service.metrics({
      where: params,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Metrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Metrics",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMetrics(
    @common.Param() params: MetricsWhereUniqueInput,
    @common.Body() data: MetricsUpdateInput
  ): Promise<Metrics | null> {
    try {
      return await this.service.updateMetrics({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          typeField: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Metrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Metrics",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMetrics(
    @common.Param() params: MetricsWhereUniqueInput
  ): Promise<Metrics | null> {
    try {
      return await this.service.deleteMetrics({
        where: params,
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          typeField: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
