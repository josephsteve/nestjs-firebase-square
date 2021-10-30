import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const testValue = this.configService.get<string>('config_value');
    if (testValue) {
      return testValue;
    } else {
      return 'Hello World!';
    }
  }
}
