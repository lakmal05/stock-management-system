import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/product.dto';
import { AuthGuard } from 'src/guards/auth.guards';
import { Rols } from 'src/decorators/rols.decorators';
import { UserType } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Rols(UserType.SUPER_ADMIN, UserType.ADMIN, UserType.CLIENT)
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
}
