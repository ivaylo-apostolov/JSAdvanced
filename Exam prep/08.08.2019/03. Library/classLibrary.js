class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        //validate max length of the arrays
        this.subscriptionTypes = {
            normal: [],
            special: [],
            vip: []
        }
    }
    subscribe(name, type) {
        let arrSubscription = this.subscriptionTypes.hasOwnProperty(type);
        if (!arrSubscription) {
            throw new Error(`The type ${type} is invalid`)
        }

        let subscriber;

        let isExists = this.subscribers.find(x => x[`name`] === name);
        if (isExists === undefined) {
            subscriber = {
                name: name,
                type: type,
                books: []
            }
            this.subscribers.push(subscriber);
        } else {
            if (isExists['type'] !== type) {
                isExists['type'] = type;
            }
        }
        return subscriber;
    }

    unsubscribe(name) {
        let nameToRemove = this.subscribers.find(x => x['name'] === name);
        if (nameToRemove === undefined) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers = this.subscribers.filter(x => x['name'] !== name);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let nameToFind = this.subscribers.find(x => x['name'] === subscriberName);
        if (nameToFind === undefined) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let objBook = {
            title: bookTitle,
            author: bookAuthor
        }

        if (nameToFind['type'] === 'normal') {
            let limitNormal = this.libraryName.length;
            if (nameToFind['books'].length < limitNormal) {
                addBook(objBook);
            } else {
                error(limitNormal);
            }
        } else if (nameToFind['type'] === 'special') {
            let limitSpecial = this.libraryName.length * 2
            if (nameToFind['books'].length < limitSpecial) {
                addBook(objBook);
            } else {
                error(limitSpecial);
            }
        } else if (nameToFind['type'] === 'vip') {
            let limitVip = Number.MAX_SAFE_INTEGER;
            if (nameToFind['books'].length < limitVip) {
                addBook(objBook);
            } else {
                error(limitSpecial);
            }
        }

        function addBook(book) {
            nameToFind['books'].push(book);
        }

        function error(limit) {
            throw new Error(`"You have reached your subscription limit ${limit}!"`)
        }

        return nameToFind;
    }

    showInfo (){
        if(this.subscribers.length === 0){
            return `${this.libraryName} has no information about any subscribers`;
        }else{
            return this.subscribers.map(
                s => `Subscriber: ${s['name']}, Type: ${s['type']}\nReceived books: ${s['books'].map(
                    b => `${b[`btitle`]} by ${b[`author`]}`
                ).join(", ")}`
            )
        }
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());    

