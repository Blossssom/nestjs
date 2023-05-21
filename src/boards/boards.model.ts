export interface Boards {
  id: string;
  title: string;
  description: string;
  status: BoardsStatus;
}

// 특정 타입을 위한 enum 생성
export enum BoardsStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
