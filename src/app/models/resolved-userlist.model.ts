import { UserFirestore } from './user-firestore.model';

export class ResolvedUserList {
    constructor(public userList: UserFirestore[], 
        public error: any = null) {}
}