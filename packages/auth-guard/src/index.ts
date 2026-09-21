import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, SetMetadata, mixin } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@university/contracts';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // No roles required, public endpoint
    }

    const request = context.switchToHttp().getRequest();
    // In our architecture, the API Gateway verifies the JWT and injects x-user-id and x-roles.
    // Internal services just trust these headers.
    const userRolesHeader = request.headers['x-roles'];

    if (!userRolesHeader) {
      throw new UnauthorizedException('No roles provided in request headers');
    }

    const userRoles = (userRolesHeader as string).split(',') as UserRole[];
    
    const hasRole = () => userRoles.some((role) => requiredRoles.includes(role));
    if (!hasRole()) {
      throw new UnauthorizedException('User does not have required roles');
    }

    return true;
  }
}
