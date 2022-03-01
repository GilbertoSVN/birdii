import { Controller, Post, Body } from '@nestjs/common';
import { CreateQuoteDto } from 'posts/dto/create-quote.dto';
import { CreateQuoteService } from 'posts/services/create-quote.service';

@Controller('posts/quote')
export class QuoteController {
  constructor(private readonly createQuoteService: CreateQuoteService) {}

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.createQuoteService.create(createQuoteDto);
  }
}
