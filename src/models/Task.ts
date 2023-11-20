export interface TaskInterface {
    taskId?: string;
    title: string;
    description: string;
    userid: number;    
}

export interface TaskData {
    tasks: TaskInterface[];
  }