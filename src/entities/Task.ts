export interface TaskInterface {
  taskId?: string;
  title: string;
  description: string;
  user: User;
  category: string;
  location?: string;
  budget: number;
  scheduling: SchedulingOption;
  specificDate?: Date;
  timeslot?: TimeSlot;
  createdAt?: Date;
}

export enum SchedulingOption {
  FLEXIBLE = 'FLEXIBLE',
  SEPCIFICDATE = 'SEPCIFICDATE',
  BEFOREDATE = 'BEFOREDATE',
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
}

export interface User {
  userId: string;
  fullName: string;
}

export interface TaskData {
  tasks: TaskInterface[];
}
