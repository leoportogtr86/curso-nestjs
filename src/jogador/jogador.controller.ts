import { Controller, Get } from '@nestjs/common';
import {Jogador} from './interfaces/Jogador.interface'
import {CriarJogadorDto} from './dto/Jogador.dto'


let j1: Jogador = {

    _id: '1',
    telefone: '(12)123654879',
    email: 'email@gmail.com',
    nome: 'Fulano de Tahl',
    ranking: 'liga master',
    posicao: 3,
    url_foto: 'www.123.com'

}

@Controller('jogador')
export class JogadorController {


    @Get()
    async index(): Promise<Jogador>{

        return j1


    }
}
