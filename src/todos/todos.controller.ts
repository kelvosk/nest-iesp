import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './entities/todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() todo: Todo) {
    return this.todosService.create(todo);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOneById(+id);
  }

  @Get(':title')
  findOneByTitle(@Param('title') title: string) {
    return this.todosService.findOneById(+title);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() todo: Todo) {
    return this.todosService.update(+id, todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
