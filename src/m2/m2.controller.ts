import { Controller, Get } from '@nestjs/common';

@Controller('/api/segundo')
export class M2Controller {



    @Get()
    async index(){

        return {msg: 'Controller 2'}

    }



}
