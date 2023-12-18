import { Controller,Get,Post,Req ,Put, Patch, Delete,Param, Query, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { TareaDTO } from './dto/tarea.dto';
import { TareaService } from './tarea.service';
import { resolve } from 'path';
import { rejects } from 'assert';


@Controller('api/v1/task')
export class TareaController {

    constructor(private readonly TareaService:TareaService ){

    }

    @Post('')
    @UsePipes(new ValidationPipe())
    create(@Body() TareaDTO:TareaDTO){
       
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('Something was wrong'),5000);

        })
       // return this.TareaService.create(TareaDTO);
    }

    @Get('all')
    findAll(){
        return this.TareaService.findAll();
    }

    @Get(':id')
    findone(@Param('id') id:string){
        return this.TareaService.findone(id);
    }

    @Put(':id')
    update(@Param('id') id:string,@Body() TareaDTO:TareaDTO){
        return this.TareaService.update(id,TareaDTO);
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe())
    delete(@Param('id') id:string){
        return this.TareaService.delete(id);
    }
    
}
