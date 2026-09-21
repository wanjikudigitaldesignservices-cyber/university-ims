import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Skip auth check for public routes and auth endpoints
    if (req.path.startsWith('/api/auth')) {
      return next();
    }

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid authorization header');
    }

    const token = authHeader.split(' ')[1];
    try {
      // Secret must match Better Auth configuration
      const secret = process.env.BETTER_AUTH_SECRET || "development-secret-key-replace-in-prod";
      const payload = jwt.verify(token, secret) as any;
      
      // Inject headers for downstream microservices
      req.headers['x-user-id'] = payload.id;
      req.headers['x-roles'] = payload.roles || 'student';
      
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
