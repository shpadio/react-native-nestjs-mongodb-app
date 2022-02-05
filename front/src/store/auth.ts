import { action, observable } from "mobx";
import { User } from "../helpers/types";

class AuthStore {
    @observable loading: boolean = false
    
    @action async login(user: User){
        this.loading = true
        // api request
        this.loading = false


    }
    
    @action async register(user: User){
        this.loading = true
        // api request
        this.loading = false
    }

    @action async logout(user: User){

    }

}


export default new AuthStore()