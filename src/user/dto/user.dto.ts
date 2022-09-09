import { IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    number: number;

    @IsString()
    authorname: string;
    
    @IsString()
    quote: string;
}
