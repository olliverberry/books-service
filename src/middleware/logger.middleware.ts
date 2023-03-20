import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.debug(
      {
        method: req.method,
        path: req.path,
        params: req.params,
        message: 'incoming request.',
      },
      LoggerMiddleware.name,
    );

    next();

    this.logger.debug(
      {
        statusCode: res.statusCode,
        path: req.path,
        params: req.params,
        message: 'serving response.',
      },
      LoggerMiddleware.name,
    );
  }
}
