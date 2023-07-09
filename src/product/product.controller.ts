import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, ProductRespnseDto } from './dtos/product.dto';
import { AuthGuard } from 'src/guards/auth.guards';
import { Rols } from 'src/decorators/rols.decorators';
import { UserType } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct(
    @Query('name') name?: string,
    @Query('price') price?: string,
  ): Promise<ProductRespnseDto[]> {
    return null;
  }

  @Rols(UserType.SUPER_ADMIN, UserType.ADMIN)
  @UseGuards(AuthGuard)
  @Post('create')
  createProduct(@Body() body: CreateProductDto) {
    return 'create product';
  }

  @Rols(UserType.SUPER_ADMIN, UserType.ADMIN)
  @UseGuards(AuthGuard)
  @Put('/:id')
  updateProduct() {
    return 'update product';
  }

  @Rols(UserType.SUPER_ADMIN, UserType.ADMIN)
  @UseGuards(AuthGuard)
  @Delete('/:id')
  deleteProduct() {

    
  }
}
