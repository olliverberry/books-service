import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const controller = context.getClass().name;
    const action = context.getHandler().name;
    const httpContext = context.switchToHttp();
    const { method, path, params } = httpContext.getRequest<Request>();

    // this seems janky
    httpContext.getResponse<Response>().addListener('close', () => {
      this.logger.debug({
        controller,
        action,
        method,
        path,
        params,
        message: 'serving response.',
        statusCode: httpContext.getResponse<Response>().statusCode,
      });
    });

    this.logger.debug(
      {
        controller,
        action,
        method,
        path,
        params,
        message: 'incoming request.',
      },
      LoggingInterceptor.name,
    );

    return next.handle().pipe(
      tap({
        error: (err) => {
          this.logger.error({
            err,
          });
        },
      }),
    );
  }
}
