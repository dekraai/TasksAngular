export class NewTask {
    taskName: string;
    details: string;
    deadLine: Date;

    constructor(taskName: string, details: string, deadLine: Date) {
        this.taskName = taskName;
        this.details = details;
        this.deadLine = deadLine;
    }
}
