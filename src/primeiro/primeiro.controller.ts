import { Controller, Get } from '@nestjs/common';



@Controller('/api/primeiro')
export class PrimeiroController {


    @Get()
    async index(){

        return {msg:"Rota 1 do primeiro controller. Hello Nest!"}
    }

    
}
