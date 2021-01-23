export abstract class CommunicationsApi {

    constructor() {
        this.parseAuth();
    }

    protected abstract parseAuth(): void;

}
