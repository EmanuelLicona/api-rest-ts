import { Entity, Column } from "typeorm"
import { BaseModel } from './base.entity'
@Entity({ name: 'cars' })
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