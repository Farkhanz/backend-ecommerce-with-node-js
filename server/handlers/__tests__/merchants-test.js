const httpMocks = require("node-mocks-http");

const { getById, getAll, create, remove } = require("../merchants");

const mockMerchant = jest.fn();
jest.mock("../../../storage", () => {
  return {
    models: {
      merchant: {
        findOne: () => mockMerchant(),
        findAll: () => mockMerchant(),
        create: () => mockMerchant(),
      },
    },
  };
});
test("getById returns an exixting merchant", async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/api/merchants/1",
    params: {
      id: 42,
    },
  });

  const response = httpMocks.createResponse();
  mockMerchant.mockResolvedValue({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });

  await getById(request, response);

  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });
});

test("getById return 404 when a merchant id does not exist", async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/api/merchants/2",
    params: {
      id: 2,
    },
  });

  const response = httpMocks.createResponse();

  mockMerchant.mockResolvedValue(null);

  await getById(request, response);

  expect(response.statusCode).toEqual(404);
  expect(response._getData()).toEqual("404 - Not found");
});

test("delete by id", async () => {
  const request = httpMocks.createRequest({
    method: "Remove",
    url: "/api/merchants/1",
    params: {
      id: 42,
    },
  });

  const response = httpMocks.createResponse();
  mockMerchant.mockResolvedValue({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });

  await getById(request, response);
  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });
});

test("DeleteId return 404 ", async () => {
  const request = httpMocks.createRequest({
    method: "Delete",
    url: "/api/merchants/2",
    params: {
      id: 2,
    },
  });

  const response = httpMocks.createResponse();

  mockMerchant.mockResolvedValue(null);

  await getById(request, response);

  expect(response.statusCode).toEqual(404);
  expect(response._getData()).toEqual("404 - Not found");
});

test("getALL returns an exixting merchant", async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/api/merchants",
    params: {
      id: 1,
      name: "Warteg Kharisma Bahari",
    },
  });

  const response = httpMocks.createResponse();
  mockMerchant.mockResolvedValue({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });

  await getAll(request, response);

  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });
});

test("getAll return 404 ", async () => {
  const request = httpMocks.createRequest({
    method: "getAll",
    url: "/api/merchants/2",
    params: {
      id: 2,
    },
  });

  const response = httpMocks.createResponse();

  mockMerchant.mockResolvedValue(null);

  await getAll(request, response);

  expect(response.statusCode).toEqual(200);
  expect(response._getData()).toEqual("null");
});
test("create return 404 ", async () => {
  const request = httpMocks.createRequest({
    method: "getAll",
    url: "/api/merchants/2",
    params: {
      id: 2,
    },
  });

  const response = httpMocks.createResponse();

  mockMerchant.mockResolvedValue(null);

  await getById(request, response);

  expect(response.statusCode).toEqual(404);
  expect(response._getData()).toEqual("404 - Not found");
});

test("create merchant", async () => {
  const request = httpMocks.createRequest({
    method: "create",
    url: "/api/merchants",
    params: {
      id: 1,
      name: "Warteg Kharisma Bahari",
    },
  });

  const response = httpMocks.createResponse();
  mockMerchant.mockResolvedValue({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });

  await create(request, response);

  expect(response.statusCode).toEqual(200);
  expect(response._getJSONData()).toEqual({
    id: "1",
    name: "Warteg Kharisma Bahari",
  });
});