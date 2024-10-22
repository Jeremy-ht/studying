import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Orders } from './Orders';


@Entity({name: 'user'})
export class User {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  roleId: number

  @Column()
  photo: string

  @Column()
  sex: number

  @Column()
  address: string

  @Column()
  age: number

  @OneToMany(type => Orders, orders => orders.user)
  orders: Orders[];
}
