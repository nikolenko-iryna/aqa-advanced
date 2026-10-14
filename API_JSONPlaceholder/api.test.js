import axios from 'axios';
test('GET отримання списку користувачів', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBe(10);
});

   test('GET отримання коментаря по id', async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/comments/3');
     expect(response.status).toBe(200);
     expect(response.data.id).toBe(3);
     expect(response.data).toHaveProperty('email');
   });

  test('GET отримання завдання по id', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
  expect(response.data.completed).toBe(false);
});

  test('Get отримання фото з альбому1', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBe(50);
});

 test('Post створення нового користувача', async () => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
  name: 'Iryna',
  email: 'irynaqa@test.com',
});
  expect(response.status).toBe(201);
   expect(response.data.name).toBe('Iryna');
   expect(response.data).toHaveProperty('id');
});

