import { createServer, Model } from 'miragejs';
import image from './images/mountains2.jpg'

export function makeServer({ environment = 'development' } = {}) {

 
  let server = createServer({
    environment,
    models: {
      books: Model,
    },
    seeds(server) {
      server.create('book', {
        bookTitle: 'Lolita',
        bookAuthor: 'Vladimir Nabokov',
        bookNotes: 'So well-written.',
        bookIcon: image,
        startDate: '2021-01-24T19:16:00.000Z',
        endDate: '2021-01-31T19:16:00.000Z'
      });
      server.create('book', {
        bookTitle: 'Way of Kings',
        bookAuthor: 'Brandon Sanderson',
        bookNotes: 'Still reading, but very impressed.',
        bookIcon: image,
        startDate: '2021-01-24T19:16:00.000Z',
        endDate: '2021-01-31T19:16:00.000Z'
      });
      server.create('book', {
        bookTitle: 'Flowers in the Attic',
        bookAuthor: 'Vc Andrews',
        bookNotes: 'Cult classic- loved it!',
        bookIcon: image,
        startDate: '2021-01-24T19:16:00.000Z',
        endDate: '2021-01-31T19:16:00.000Z'
      });
    },
    routes() {
      this.namespace = 'api';

      // define API endpoints here

      this.get("/books", (schema, request) => {
        return schema.books.all()
      })

      this.get("/books/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.books.find(id)
      })

      this.post("/books", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
       

        return schema.books.create(attrs)
      })

      this.patch("/books/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody)
        let id = request.params.id
        let book = schema.books.find(id)

        return book.update(newAttrs)
      })

      this.delete("/books/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.books.find(id).destroy()
      })

    

    }
  });

  return server;
}
