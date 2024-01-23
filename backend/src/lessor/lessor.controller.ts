import { Controller, Delete, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LessorService } from './services/lessor.service';
import { SessionGuard } from 'src/auth/guards/Session.guard';

@Controller('lessor')
export class LessorController {
  constructor(private lessorService: LessorService) {}

  @UseGuards(SessionGuard)
  @Get()
  async getLessor(@Req() req) {
    return this.lessorService.getLessor(req.auth);
  }

  @UseGuards(SessionGuard)
  @Post()
  async createLessor(@Req() req) {
    return this.lessorService.createLessor(req.auth);
  }

  @UseGuards(SessionGuard)
  @Delete()
  async deleteLessor(@Req() req) {
    return this.lessorService.deleteLessor(req.auth.uid);
  }
}
