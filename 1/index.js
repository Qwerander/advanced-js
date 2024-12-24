// Задание 1: Музыкальная коллекция
const musicCollection = {
    albums: [
      { title: "Abbey Road", artist: "The Beatles", year: 1969 },
      { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
      { title: "Back in Black", artist: "AC/DC", year: 1980 },
      { title: "Thriller", artist: "Michael Jackson", year: 1982 },
    ],

    [Symbol.iterator]() {
      let index = 0;
      const albums = this.albums;

      return {
        next() {
          if (index < albums.length) {
            return { value: albums[index++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };


  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }

  // Задание 2

  const chefs = new Map([
    ["Пицца \"Маргарита\"", "Виктор"],
    ["Пицца \"Пепперони\"", "Виктор"],
    ["Суши \"Филадельфия\"", "Ольга"],
    ["Суши \"Калифорния\"", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"],
  ]);


  const clientOrders = new Map();

  const alexey = { name: "Алексей" };
  const maria = { name: "Мария" };
  const irina = { name: "Ирина" };

  clientOrders.set(alexey, ["Пицца \"Пепперони\"", "Тирамису"]);
  clientOrders.set(maria, ["Суши \"Калифорния\"", "Пицца \"Маргарита\""]);
  clientOrders.set(irina, ["Чизкейк"]);

  for (const [client, orders] of clientOrders) {
    console.log(`Клиент: ${client.name}`);
    orders.forEach((dish) => {
      const chef = chefs.get(dish);
      console.log(`  Блюдо: ${dish} (Повар: ${chef})`);
    });
  }
