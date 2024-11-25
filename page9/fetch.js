// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((data) => {
//     return data.json();
//   })
//   .then((post) => {
//     console.log(post.title);
//   });

// fetch('https://jsonplaceholder.typicode.com/pots/1')
//   .then((data) => {
//     if (!data.ok) {
//       throw Error(data.status);
//     }
//     return data.json();
//   })
//   .then((post) => {
//     console.log(post.title);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const update = {
  title: 'Clarence White Techniques',
  body: 'Amazing',
  userId: 1,
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // 'application/json' 오타도 수정
  },
  body: JSON.stringify(update),
};

fetch('https://jsonplaceholder.typicode.com/posts', options) // URL 수정
  .then((data) => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
  })
  .then((update) => {
    console.log(update);
  })
  .catch((e) => {
    console.log(e);
  });
