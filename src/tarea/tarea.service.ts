import { Injectable } from '@nestjs/common';
import { TareaDTO } from './dto/tarea.dto';
import { ITarea } from './Tarea.interface';
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class TareaService {
    Tareas: ITarea[] = [];


    create(TareaDTO : TareaDTO): ITarea { 
        const Tarea= {
            id:uuidv4(),
            ...TareaDTO,
        };

        this.Tareas.push(Tarea);

        return Tarea;
    
    }

    findAll():ITarea[] {

        return this.Tareas
    }
        
    findone(id:string):ITarea {

        return this.Tareas.find((t)=>t.id===id);
    }

    update(id:string, TareaDTO:TareaDTO):ITarea {

        const Tarea= {
            id,
            ...TareaDTO,
        };

        this.Tareas=this.Tareas.map((t)=>t.id===id?Tarea:t);

        return Tarea
    }

    delete(id:string) : string{
        this.Tareas=this.Tareas.filter((t)=>t.id!==id);
    return 'Tarea Eliminada';
    }
    
    
}
