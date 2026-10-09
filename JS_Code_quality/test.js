class DataFromServer {
  async getTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const asyncTodo = await response.json();
      return asyncTodo;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const asyncUsers = await response.json();
      return asyncUsers;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const server = new DataFromServer();
class HandlerServer {
  async retrieveData() {
    try {
      const allProm = await Promise.all([server.getTodo(), server.getUser()]);
      console.log(allProm);
      const raceProm = await Promise.race([server.getTodo(), server.getUser()]);
      console.log(raceProm);
    } catch (error) {
      console.log(error);
    }
  }
}
const handler = new HandlerServer();
handler.retrieveData();
