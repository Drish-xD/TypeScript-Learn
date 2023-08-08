import type { Request } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

export type { RequestWithBody };

