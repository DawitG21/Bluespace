export interface IEvent {
    category : string;
    userId : string;
    tag : string;
    description : string;
    start : string;
    end : string;
    dueDate : string;
    rate : any;
    participants : any[];
    prePaid : number;
    docs : any[];
    total : number;
    limit : number;
    page : number;
    pages : number;
}