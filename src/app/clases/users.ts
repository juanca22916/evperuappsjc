// export class Users {
//     id: number;
//     first_name: string;
//     last_name: string;
//     avatar: string;
// }
import { User } from './user';
export class Users {
    constructor(
        public page: number,
        public per_page: number,
        public total: number,
        public total_pages: number,
        public data: User[]
    ) { }
}