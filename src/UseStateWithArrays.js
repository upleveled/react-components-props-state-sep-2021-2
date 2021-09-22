import { useState } from 'react';

const tropicalFruits = ['papaya', 'apple', 'pineapple'];

const tropicalFruitsObj = [
  {
    id: '1',
    name: 'papaya',
    img: 'https://www.eatme.eu/media/0wnd2gro/papaya-formosa-productfoto.jpg?anchor=center&mode=crop&width=560&height=560&format=webp&quality=75&rnd=132629704379370000',
  },
  {
    id: '2',
    name: 'apple',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81Dl5GdAVkL.png',
  },
  {
    id: '3',
    name: 'pineapple',
    img: 'https://i1.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Pineapple.jpg?fit=800%2C1000&ssl=1',
  },
];

export default function UseStateWithArray() {
  const [fruits, setFruits] = useState(tropicalFruitsObj);

  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.name}
              <br />
              <img
                style={{ width: '100px' }}
                src={fruit.img}
                alt={fruit.name}
              />
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          // copy the state
          // update state
          // set new state

          // VERSION WITH SPREAD OPERATOR
          // const newFruits = [...fruits];
          // newFruits.push({
          //   name: 'melon',
          //   img: 'https://i1.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Pineapple.jpg?fit=800%2C1000&ssl=1',
          // });
          // console.log(newFruits);

          // VERSION WITH SPREAD OPERATOR
          const newFruits = [
            ...fruits,
            {
              name: 'melon',
              img: 'https://i1.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Pineapple.jpg?fit=800%2C1000&ssl=1',
              key: '4',
            },
          ];

          // create an array with new array key
          //  const newFruits = new Array();

          // create an array with [] notation
          // const newFruits = [];
          // newFruits.push(fruits[0]);
          // newFruits.push(fruits[1]);
          // newFruits.push(fruits[2]);
          // newFruits.push({
          //   name: 'melon',
          //   img: 'https://i1.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Pineapple.jpg?fit=800%2C1000&ssl=1',
          //   key: '4',
          // });

          console.log(newFruits);

          setFruits(newFruits);
        }}
      >
        add new newFruit
      </button>
      <button
        onClick={() => {
          // VERSION WITH SPREAD OPERATOR

          const filteredFruits = fruits.filter((fruit) => {
            return fruit.name !== 'papaya';
          });

          console.log(filteredFruits);

          setFruits(filteredFruits);
        }}
      >
        remove papaya
      </button>
      <button
        onClick={() => {
          // VERSION WITH SPREAD OPERATOR

          const newFruits = [...fruits];
          const apple = newFruits.find((fruit) => {
            return fruit.name === 'apple';
          });

          apple.img =
            'https://i1.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Pineapple.jpg?fit=800%2C1000&ssl=1';

          console.log(apple);

          setFruits(newFruits);
        }}
      >
        update papaya
      </button>
    </div>
  );
}
