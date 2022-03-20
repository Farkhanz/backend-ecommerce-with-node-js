const httpMocks = require("node-mocks-http");
const { getById } = require("../products");

const mockFindOneProduct = jest.fn();
jest.mock("../../../storage", () => {
  return {
    models: {
      product: {
        findOne: () => mockFindOneProduct,
      },
    },
  };
});

test("getById returns existing product", async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/api/merchants/1/products",
    params: {
      id: "1",
      merchantId: "1",
    },
  });

  const response = httpMocks.createResponse();
  mockFindOneProduct.mockResolvedValue({
    id: "1",
    merchantId: "1",
  });

  await getById(request, response);

  expect(response.statusCode).toEqual(200);
  expect(response.getJSONData()).toEqual({
    id: "1",
    merchantId: "1",
  });
});

test("getById return 404 when a product id does not exist", async () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/api/merchants/1/products",
    params: {
      id: 3,
    },
  });

  const response = httpMocks.createResponse();

  mockFindOneProduct.mockResolvedValue(null);

  await getById(request, response);

  expect(response.statusCode).toEqual(404);
  expect(response._getData()).toEqual("404 - Not found");
});