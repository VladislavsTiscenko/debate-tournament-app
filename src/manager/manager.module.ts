import { Module } from '@nestjs/common';
import { OpentokModule } from 'src/opentok/opentok.module';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';

@Module({
  controllers: [ManagerController],
  providers: [ManagerService],
  imports: [OpentokModule]
})
export class ManagerModule {
    
}
