class Library {
  #books;

  constructor(initialBooks = []) {
    if (new Set(initialBooks).size !== initialBooks.length) {
      throw new Error("Начальный список содержит дубликаты.");
    }
    this.#books = [...initialBooks];
  }

  get allBooks() {
    return [...this.#books];
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(
        `Книга с названием "${title}" уже существует в библиотеке.`
      );
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книга с названием "${title}" не найдена в библиотеке.`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

try {
  const myLibrary = new Library(["Мастер и Маргарита", "1984"]);
  myLibrary.addBook("Три товарища");
  console.log(myLibrary.allBooks);
  console.log(myLibrary.hasBook("1984"));
  myLibrary.removeBook("1984");
  console.log(myLibrary.allBooks);
} catch (error) {
  console.error(error.message);
}
