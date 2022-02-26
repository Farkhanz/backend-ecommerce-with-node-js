const axios = require("axios");
const { default: Users } = require("../models/UsersModel.js");
const { Users } = require("./Users.js");

jest.mock("axios");

test("Users", async () => {
    axios.get.mockResolvedValue({
        data: {
            id: "1",
            name: "Cosette",
            email: "cosette@gmail.com",
            address: "jalan",
            phone_number: "0123456"
        }
    });

    const Users = await getUsers();
    expect(Users).toEqual("Cosette");

});