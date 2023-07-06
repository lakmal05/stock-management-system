import { SetMetadata } from "@nestjs/common";
import { UserType } from "@prisma/client";

export const Rols =(...roles:UserType[])=>SetMetadata('roles',roles)