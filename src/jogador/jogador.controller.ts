import { Jogador } from './../interfaces/Jogador.interface';
import { Controller, Get } from '@nestjs/common';

@Controller('jogador')
export class JogadorController {


    @Get()
    async index(){

        return {msg: 'Controller Jogador'}


    }
}