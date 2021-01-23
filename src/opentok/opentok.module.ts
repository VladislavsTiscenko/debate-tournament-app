import { Module } from '@nestjs/common';
import { OpentokService } from './opentok.service';

@Module({
  providers: [OpentokService]
})
export class OpentokModule {}
