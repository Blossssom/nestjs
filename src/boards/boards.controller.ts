import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Boards } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Get()
  getAllBoards(): Boards[] {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Boards {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Boards {
    return this.boardService.createBoard(createBoardDto);
  }
}
