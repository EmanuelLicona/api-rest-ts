import { Entity, Column } from "typeorm"
import { BaseModel } from './base.entity'
import { IUser } from '../interfaces/user.interface'
@Entity({ name: 'storages' })
export class Storage extends BaseModel  {
    @Column({ name: 'file_name' })
    fileName: string
    @Column({ name: 'path' })
    path: string
    @Column({ name: 'id_user' })
    idUser: string
}