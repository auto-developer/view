import {makeAutoObservable} from "mobx";

export default class AuthStore {
    authorized: boolean = true;

    constructor() {
        makeAutoObservable(this)
    }

    setAuthorized(authorized: boolean) {
        this.authorized = authorized
    }
}
