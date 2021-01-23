import { User } from "./user";
import { v4 as uuidv4 } from 'uuid';

export class Room {

    private users: Map<string, User>;
    private config: RoomConfig;
    private uuid: string;

    constructor(config: RoomConfig, uuid: string) {
        this.config = config;
        this.uuid = uuid;
    }

    public static generateRoom(config: RoomConfig): string {

        const uuid: string = uuidv4();
        const room: Room = new Room(config, uuid);
        /* submit room into redis */
        return uuid;

    }

    public addUser(user: User): void {

        /*  */

    } 

}

type RoomConfig = {

    title: string;
    creator: User /*| Organization */ | false;
    blocks: Block[];
    groups: Map<string, UserGroup>;
    published: boolean;

}

type UserGroup = {

    ref?: string; /* required if global group */
    displayName?: string; /* required if global group */
    emoji?: string;
    users?: User[]; /* required if global group */
    permissions?: Permission[];

    joinable: boolean;
    joinEndpoint?: string;

    published: boolean;
    hd: boolean;
    publishEndpoint?: string;

} | UserGroupRef;

type UserGroupRef = {

    ref: string;

}

enum Permission {



}

type TimeDef = {

    controlledBy: UserGroup[];
    time: number | false;

}

interface Block {

    videoPublishers: Users;
    videoStreamers: Users;
    voicePublishers: Users;
    voiceStreamers: Users;
    time: TimeDef;

    poi: POIConfig;

}

type POIConfig = {


    
}

type Users = (User | UserGroup)[];

interface Queue extends Block {

    whitelist?: Users;
    blacklist?: Users;
    timeIndividual?: TimeDef;
    timeTotal?: TimeDef;
    groupRef: UserGroupRef /* Each group must have an open-endpoint UserGroup associated */;

}