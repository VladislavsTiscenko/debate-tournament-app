import { Injectable } from '@nestjs/common';
import { CommunicationsApi } from 'src/manager/communications-api';

@Injectable()
export class OpentokService extends CommunicationsApi {

    protected parseAuth(): void {
        
    }

}
