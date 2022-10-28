import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Todo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title?: string;

    @Column()
    active?: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @ManyToOne(() => User)
    @JoinColumn({
        referencedColumnName: "id",
        name: "user_id"
    })
    user?: User;
}