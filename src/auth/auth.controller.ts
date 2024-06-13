import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginResponseDTO } from './dtos/LoginResponse.dto';
import { RegisterResponseDTO } from './dtos/RegisterResponse.dto';
import { Public } from './decorators/public.decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req): Promise<LoginResponseDTO | BadRequestException> {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(
    @Body() user: CreateUserDto,
  ): Promise<RegisterResponseDTO | BadRequestException> {
    return await this.authService.register(user);
  }
}
