import { Injectable } from '@nestjs/common';
import pjson from '../package.json';

@Injectable()
export class AppService {
  getVersion(): string {
    return pjson.version;
  }
}