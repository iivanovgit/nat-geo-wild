import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';



@Injectable()
export class FirebaseService {
    // private homeSlides: FirebaseListObservable<any>;

    constructor(private af: AngularFire) {
    }

    getHomeSlides() {
        return this.af.database.list('public/home/slides/');
    }

    getUserData(uid) {
        return this.af.database.object('authentication/users/' + uid);
    }

    getLatestBook(uid) {
        return this.af.database.list('books/' + uid, {
            query: {
                orderByChild: 'title',
                limitToLast: 1,
            }
        });
    }

    getBooksData(uid) {
        return this.af.database.list('books/' + uid, {
            query: {
                orderByChild: 'title'
            }
        });
    }
    getBookChapters(uid, bookid) {
        return this.af.database.list('books/' + uid + '/' + bookid + '/chapters/');
    }

    setNewBook(uid, data) {
        this.af.database.list('books/' + uid).push(data)//.then((item) => { console.log(item.key) })
    }
}
