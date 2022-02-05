import { Query } from "@nestjs/common";
import { Args, Resolver } from "@nestjs/graphql";
import { UsersService } from "./user.service";

// @Resolver(of => User)
export class UsersResolver{
    constructor(
        private readonly usersService: UsersService,
    ){}

    // @Query(returns => String)
    // async hello(){
    //     return 'Hello!'
    // }

    // @Query(returns => User)
    // async users(@Args({
    //     name:'id',type: () => Int
    // }) id: number){
    //     return await this.usersService.findOneById(id)
    // }
}