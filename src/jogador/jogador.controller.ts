import { Controller, Get } from '@nestjs/common';

@Controller('jogador')
export class JogadorController {


    @Get()
    async index(){

        return {msg: 'Controller Jogador'}


    }
}
