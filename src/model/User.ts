export class User {
    static counter: number = 1;
    id: number;
    fname: string;
    lname: string;
    discription: string;
    done: boolean;
    date: Date;

    constructor(id: number, fname: string, lname: string, discription: string) {
        this.id = id;
        this.fname  = fname;
        this.lname = lname;
        this.discription = discription;
        this.done = false;
        this.date = new Date();
    }

    changeStatus(value: boolean) {
        this.done = value;
    }
}
