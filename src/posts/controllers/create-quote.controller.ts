import { Controller, Post, Body } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { CreateQuoteDto } from 'posts/dto/create-quote.dto';
import { CreateQuoteService } from 'posts/services/create-quote.service';

@ApiTags('posts')
@Controller('posts/quote')
export class QuoteController {
  constructor(private readonly createQuoteService: CreateQuoteService) {}

  @Post()
  @ApiNoContentResponse({ description: 'Quote has been created' })
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.createQuoteService.create(createQuoteDto);
  }
}
