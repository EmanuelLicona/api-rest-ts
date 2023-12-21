import { Entity, Column } from "typeorm"
import { BaseModel } from './base.entity'
import { IUser } from '../interfaces/user.interface'
@Entity({ name: 'users' })
export class User extends BaseModel  {
    @Column('varchar', { unique: true, nullable: false, length: 100 })
    email: string

    @Column( 'text', { nullable: false })
    password: string

    @Column( 'varchar', { nullable: false , length: 100 })
    name: string

    @Column( 'text', { nullable: true })
    description: string
}