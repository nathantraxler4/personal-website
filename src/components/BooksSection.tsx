interface Book {
  title: string;
  author: string;
}

const books: Book[] = [
  { title: 'Chip War', author: 'Chris Miller' },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
  { title: "Man's Search for Meaning", author: 'Viktor E. Frankl' },
  { title: 'Digital Minimalism', author: 'Cal Newport' },
  { title: '1984', author: 'George Orwell' },
];

export default function BooksSection() {
  return (
    <section id="books" className="py-20 px-6 bg-(--main-background)">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-stone-700 mb-8">Books I like</h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-stone-600 font-light ml-4">
          {books.map((book) => (
            <li key={book.title}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
