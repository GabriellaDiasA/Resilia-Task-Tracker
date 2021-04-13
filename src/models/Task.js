export class TaskModel{
    constructor(body){
        this.title = body.title;
        this.description = body.description;
        this.status = body.status;
        this.date = body.date;
    }
}