const User = require("./model/user.schema");
const request = require("supertest");
const app = require("./server");

jest.mock("./model/user.schema"); // mock User model

describe("POST /api/user/register", () => {

    it("should return 'User already exists' if email is already registered", async () => {
        User.findOne.mockResolvedValueOnce(true); // mock findOne

        const response = await request(app)
            .post("/api/user/register")
            .send({
                user: "ritesh",
                email: "ritesh123@gmail.com",
                password: "123"
            });

        expect(response.body.message).toBe("User already exists");
    });

    it("should create a new user with email nitesh123@gmail.com", async () => {
        User.findOne.mockResolvedValueOnce(false); // user does not exist

        User.create.mockResolvedValueOnce({
            user: "nitesh",
            email: "nitesh123@gmail.com",
            password: "1234"
        });

        const response = await request(app)
            .post("/api/user/register")
            .send({
                user: "nitesh",
                email: "nitesh123@gmail.com",
                password: "1234"
            });

        expect(response.body.message).toBe("User registered successfully");
    });

});
