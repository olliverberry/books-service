import { format, transports, LoggerOptions } from 'winston';

export function getLoggerOptions(): LoggerOptions {
  return {
    level: 'debug',
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console()],
    handleExceptions: true,
  };
}
