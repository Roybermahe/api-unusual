import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "src/services/users.service";

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get(':Id')
    async getUserInformation(@Param() params: any) {
        return (await this.userService.getUser(<string>params.Id));
    }
}