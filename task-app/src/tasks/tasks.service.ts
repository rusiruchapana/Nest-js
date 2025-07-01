/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>){}
    
    async create(createTaskDto: CreateTaskDto): Promise<Task>{
        const createdTask = new this.taskModel({
            ...createTaskDto,
            createdAt: new Date(),
            completed: createTaskDto.completed || false
        });

        return createdTask.save();
    }


    async findAll(): Promise<Task[]>{
        return this.taskModel.find().sort({createdAt: -1}).exec();
    }

    async findById(id: string): Promise<Task>{
        const task = await this.taskModel.findById(id).exec();
        if(!task){
            throw new NotFoundException(`Task with ID ${id} not found   `);
        }
        return task;
    }
    

}
