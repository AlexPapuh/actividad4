import { Controller, Get , Post, Render } from '@nestjs/common';
import { ClienteService } from '../servicies/cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService:ClienteService){
    }
    @Get('form')
    @Render('cliente/form')
    form(){
        return {};

    }
    @Post('')
    add(){
        return {};

    }
    @Post('update')
    edit(){
        return {};

    }
    @Post('delete/:id')
    delete(){
        return {};

    }
    @Get('')
    @Render('cliente/list')
    list(){
        return {};

    }
}
