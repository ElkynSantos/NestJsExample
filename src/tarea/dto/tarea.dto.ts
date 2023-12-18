import { IsBoolean, IsNotEmpty, IsString, isNotEmpty, isString } from "class-validator";

export class TareaDTO{

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly isdone:boolean;
}