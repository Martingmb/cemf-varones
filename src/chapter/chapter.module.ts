import { Module } from '@nestjs/common';
import { ChapterController } from './controller/chapter.controller';
import { ChapterService } from './service/chapter.service';

@Module({
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule {}
