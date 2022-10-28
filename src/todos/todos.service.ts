import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {

constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

  create(todo: Todo) {
    return this.todoRepository.save(todo);
  }

  async findAll() {
    const todo = await this.todoRepository.find();
    return todo;
  }

  async findOneById(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });
    return todo;
  }

  async findOneByTitle(title: string) {
    const todo = await this.todoRepository.findOne({ where: { title } });
    return todo;
  }

  async update(id: number, todo: Todo) {
    return this.todoRepository.update(id, todo);
  }

  async remove(id: number) {
    const todo = await this.findOneById(id);
    return this.todoRepository.remove(todo);
  }
}

