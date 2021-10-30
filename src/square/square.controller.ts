import { Controller, Get } from '@nestjs/common';
import { SquareService } from './square.service';

@Controller('square')
export class SquareController {
  constructor(private squareService: SquareService) {}

  @Get('location')
  async getLocation(): Promise<any> {
    return await this.squareService.getLocation();
  }
}
