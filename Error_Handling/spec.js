const axios = require("axios");

async function getError() {
  return axios.get("https://qauto.forstudy.space/api/users/current/random");
}

async function getWithHeaders() {
  return axios.get("https://qauto.forstudy.space/api/cars/brands", {
    headers: { "X-Custom-Header": "my-value" },
    params: { page: 1 },
  });
}

describe("Error handling", () => {
  test("Error handling", async () => {
    expect.assertions(2);
    await getError().catch((error) => {
      expect(error.response.status).toBe(404);
      expect(error.message).toBe("Request failed with status code 404");
    });
  });
});

describe("Headers and params", () => {
  test("request includes headers and params", async () => {
    const response = await getWithHeaders();
    expect(response.status).toBe(200);
    expect(response.config.headers["X-Custom-Header"]).toBe("my-value");
    expect(response.config.params.page).toBe(1);
  });
});