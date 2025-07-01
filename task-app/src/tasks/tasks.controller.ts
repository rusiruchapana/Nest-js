/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){}

    

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) : Promise<Task>{
        return this.tasksService.create(createTaskDto);
    }

    @Get()
    async findAll(): Promise<Task[]>{
        return this.tasksService.findAll();
    }
    
    




}
