export interface TaskInterface {
    id: string;
    taskDetail: string;
    status: boolean;
    removeTask: (id:string)=>void;
    index: number;
}