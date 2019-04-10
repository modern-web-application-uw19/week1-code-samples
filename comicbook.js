class Book {
    constructor(title) {
        this.title = title;
        this.description = '';
    }
};

class ComicBook extends Book {
    constructor(title, issueNumber) {
        super(title + ' (comicbook)');
        this.issueNumber = issueNumber;
        this.description = this.description + ' (comicbook)';
    }
}

const comic = new ComicBook('Spiderman', 1);
console.log(comic);