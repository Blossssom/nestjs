import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable } from '@nestjs/common';
import { Boards, BoardsStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  // 외부에서의 수정을 막기 위해 private 선언
  private boards: Boards[] = [];

  getAllBoards(): Boards[] {
    return this.boards;
  }

  getBoardById(id: string): Boards {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards.filter((board) => board.id !== id);
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Boards = {
      id: uuid(),
      title,
      description,
      status: BoardsStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
