import { Injectable } from '@nestjs/common';
import { OpentokService } from 'src/opentok/opentok.service';

@Injectable()
export class ManagerService {

    constructor(private commService: OpentokService) {}

}
