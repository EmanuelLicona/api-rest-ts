import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { BaseModel } from './base.entity'
@Entity()
export class Car extends BaseModel {

    @Column('text', { nullable: false })
    color: string

    @Column('int', { nullable: false })
    gas: number

    @Column('int', { nullable: false })
    year: number

    @Column('text', { nullable: false })
    description: string

    @Column('float', { nullable: false })
    price: number
}