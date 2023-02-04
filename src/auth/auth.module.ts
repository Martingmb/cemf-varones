import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [PassportModule],
})
export class AuthModule {}
