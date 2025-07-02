/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';
import { UpdateTaskDto } from './dto/update-task.dto';

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

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Task>{
        return this.tasksService.findById(id);
    }
    
    @Put(':id')
    async updateTask(@Param('id') id: string , @Body() taskDetails: UpdateTaskDto): Promise<Task>{
        return this.tasksService.updateTask(id , taskDetails);
    }




}
