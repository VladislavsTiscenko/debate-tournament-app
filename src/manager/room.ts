import { Injectable } from "@nestjs/common";
import { User } from "./user";

export class Room {

    private users: Map<String /*userid*/, User>;
    private config: RoomConfig;

}

type RoomConfig = {

    blocks: Block[];

}

type UserGroup = {

    name: string;

}

type TimeDef = {



}

type Block = {

    videoPublishers: (User | UserGroup)[];
    videoStreamers: (User | UserGroup)[];
    voicePublishers: (User | UserGroup)[];
    voiceStreamers: (User | UserGroup)[];
    time: TimeDef;

}