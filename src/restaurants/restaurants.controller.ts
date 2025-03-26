import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant as RestaurantModel } from "@prisma/client";

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Get('all')
    async getAllRestaurants(): Promise<RestaurantModel[]> {
        return this.restaurantsService.restaurants({});
    }

    @Get('restaurant/:id')
    async getRestaurantById(@Param('id') id: string): Promise<RestaurantModel | null> {
        return this.restaurantsService.restaurant({ id: String(id) });
    }

    @Post('create')
    async createRestaurant(
        @Body() restaurantData: { name: string; cuisine: string; website: string; openingTimes: string; },
    ): Promise<RestaurantModel> {
        const { name, cuisine, website, openingTimes } = restaurantData;
        return this.restaurantsService.createRestaurant({
            name,
            cuisine,
            website,
            openingTimes
        })
    }
}
