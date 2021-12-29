import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "../../../../category/infra/typeorm/models/Category";

@Entity("videos")
export class Video {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  time: number;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({name: "category_id"})
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}