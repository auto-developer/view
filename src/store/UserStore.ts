import {makeAutoObservable} from "mobx";

export type User = {
    id: number;
    username: number;
    password: string;
    email: string;
    mobile: string;
}

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user: User) {
        this.user = user
    }

    async fetchUser() {
        const response = await fetch('/user')
        const user = await response.json()
        this.setUser(user)
    }
}
