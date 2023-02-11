import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentStreamKey = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    const streamKey =
      ctx.getContext().streamKey || ctx.getContext().req.streamKey;

    return streamKey;
  },
);
