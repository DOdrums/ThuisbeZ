import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { PrismaService} from "../prisma.service";
import { RestaurantsController } from './restaurants.controller';

@Module({
  providers: [RestaurantsService, PrismaService],
  controllers: [RestaurantsController]
})
export class RestaurantsModule {}
