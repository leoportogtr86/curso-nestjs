import { Controller, Get } from '@nestjs/common';

import {Jogador} from './interfaces/Jogador.interface'
import {JogadorService} from './jogador.service'



@Controller('jogador')
export class JogadorController {

    constructor(private jogadorService: JogadorService){

    }




    @Get()
    async index(): Promise<Jogador>{

        return this.jogadorService.getJogador()


    }
}
