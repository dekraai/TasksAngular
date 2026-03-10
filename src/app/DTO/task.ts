import { timestamp, Timestamp } from "rxjs";
import {TaskStatus} from '../DTO/task-status'

export class Task {
    taskId: number;
    name: string;
    deadline: string;
    ownerId: number;
    assigneeId: number;
    status: TaskStatus;

    constructor() {
        this.taskId = 0;
        this.name = "";
        this.deadline = "";
        this.ownerId = 0;
        this.assigneeId = 0;
        this.status = TaskStatus.CLOSED;
    }
}
