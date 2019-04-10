class Book {
    constructor(title) {
        this.title = title;
        this.description = '';
    }

    setDescription(description) {
        this.description = description;
    }

    static sameTitles(book1, book2) {
        return book1.title === book2.title;
    }
};

const book1 = new Book('The Revenge of the Analog');
const book2 = new Book('The Grapes of Wrath');

console.log(Book.sameTitles(book1, book2));

// book1.setDescription('Vinyl is back in vogue with the kids');

console.log(book1);
