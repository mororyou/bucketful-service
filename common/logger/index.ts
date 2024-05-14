import { format } from 'date-fns';
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
          ignore: 'pid,hostname',
          translateTime: 'SYS:standard',
          formatter: 'pretty',
          messageFormat: '',
        },
      },
      {
        target: 'pino-pretty',
        level: 'trace',
        options: {
          colorize: false,
          destination: `logs/${format(new Date(), 'yyyy-MM-dd')}.log`,
          mkdir: true,
          translateTime: 'SYS:standard',
          formatter: 'pretty',
        },
      },
    ],
  },
});

export default logger;
