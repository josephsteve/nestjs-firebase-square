import { Injectable } from '@nestjs/common';
import { Client, Environment, Location } from 'square';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SquareService {
  constructor(private configService: ConfigService) {}
  private config = {
    environment: Environment.Sandbox,
    accessToken: this.configService.get<string>('square_access_token'),
    timeout: 3000,
  };
  private squareClient = new Client(this.config);

  public async getLocation(): Promise<Location> {
    console.log(this.config);
    const { locationsApi } = this.squareClient;
    try {
      const listLocationsResponse = await locationsApi.listLocations();
      return listLocationsResponse.result.locations[0];
    } catch (error) {
      console.log('There was an error in your request: ', error);
    }
  }
}
