import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type AuthObjectt = {
  app: string;
  addr: string;
  name: string;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/live')
  authLiveStream(@Body() body: AuthObjectt): any {
    const streamSecretKey = body.name;

    if (streamSecretKey !== 'eliv_test_stream_key') {
      return new ForbiddenException('STREAM_KEY_INVALID');
    }

    console.log(
      'An user started a live stream session with key',
      streamSecretKey,
    );

    return { ok: true };
  }
}
