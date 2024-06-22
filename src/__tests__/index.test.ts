import request from "supertest";
import app from "../index";
import http from "http";

let server: http.Server;

beforeAll((done) => {
  server = app.listen(0, () => {
    // Portu 0 olarak ayarlamak rastgele bir port numarası kullanır.
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    done();
  });
});

describe("GET /", () => {
  it("responds with Hello World", async () => {
    const response = await request(server).get("/");
    expect(response.text).toBe("Hello World!");
  });
});
