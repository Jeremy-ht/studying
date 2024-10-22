import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { JoinColumn } from 'typeorm/browser';


@Entity({name: 'orders'})
export class Orders {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  accountId: number

  @Column()
  money: string

  @Column()
  productNum: number

  @Column()
  status: number

  @Column()
  recieveName: string

  @Column()
  phone: string

  @Column()
  address: string

  @Column()
  createTime: Date

  @ManyToOne(() => User, user => user.orders)
  user: User;

}
