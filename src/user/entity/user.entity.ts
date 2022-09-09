import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    number:number;

    @Column({nullable: true})
    authorname: string;

    @Column({ nullable: true})
    quote: string;
}
