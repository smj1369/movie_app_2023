import React from 'react';

function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike =[
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IHo2Cv8EAemst5WPaKbqPQHaEe%26pid%3DApi&f=1&ipt=3e07fb4c14c227e0f0398dd4df9a5ae428f6d7f02318c7e4972abe72c7eda650&ipo=images',
  },
  {
    name: 'Tteokbokki',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.koreanbapsang.com%2Fwp-content%2Fuploads%2F2018%2F09%2FDSC3132-3-1.jpg&f=1&nofb=1&ipt=6bece334c3f5e5a1a8313cfa818697d2cbe494eafb7a289558e86d305b64a449&ipo=images',
  },
  {
    name: 'Gooksoo',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F19%2F45%2Fbb%2F1945bb4ced14cee3f37efd341e0ebdd2.jpg&f=1&nofb=1&ipt=974507e097879e24b112c5bc71292a1b9944392a5e60b6b43fcd691a708dfb9b&ipo=images',
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fchichilicious.com%2Fwp-content%2Fuploads%2Fbibimbap-recipe.jpg&f=1&nofb=1&ipt=81c50bcf715e1dbd408086abb5490a3886c48ef980054d511ff6ba3782e2e277&ipo=images',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;
