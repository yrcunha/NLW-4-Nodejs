import {Entity, CreateDateColumn, PrimaryColumn, Column} from "typeorm";
import { v4 as uuid} from 'uuid'

@Entity("users")
export class User {
    @PrimaryColumn('uuid')
    readonly idUser: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

  constructor() {
    if (!this.idUser) {
      this.idUser = uuid();
    }
  }
}
