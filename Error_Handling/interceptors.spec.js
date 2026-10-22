const axios = require("axios");

const successUrl = "https://qauto.forstudy.space/api/cars/brands";
const errorUrl = "https://qauto.forstudy.space/api/users/current/random";

axios.interceptors.request.use((config) => {
  if (config.url === successUrl) {
    config.adapter = () => Promise.resolve({ status: 200, data: "Mock data" });
  }
  if (config.url === errorUrl) {
    return Promise.reject(new Error("Mock error"));
  }
  return config;
});

describe("Mocking axios", () => {
  test("successful request", async () => {
    const response = await axios.get(successUrl);
    expect(response.status).toBe(200);
    expect(response.data).toBe("Mock data");
  });

  test("failed request", async () => {
    expect.assertions(1);
    await axios.get(errorUrl).catch((error) => {
      expect(error.message).toBe("Mock error");
    });
  });
});