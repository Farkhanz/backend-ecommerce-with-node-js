const httpMocks = require("node-mocks-http");

const { getProductById,getAllProducts } = require('./product');

const mockFindIdProduct = jest.fn();
jest.mock("../models/productModel.js", () => {
    return {
        Product: {
            products: {
                findAll: () => mockFindIdProduct(),
                findId: () => mockFindIdProduct()
            },
        },
    };
});
// Test for getAllProducts
test("getAllProducts returns an all product", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/api/product"
    });
    const response = httpMocks.createResponse();

    mockFindIdProduct.mockResolvedValue({
        "id": 3,
        "name": "Amberfune",
        "quantity": "5",
        "price": 70000,
        "createdAt": "2022-01-19",
        "updatedAt": "2022-01-19"
    });
    
    await getAllProducts(request,response);

    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        "id": 1,
        "name": "Simp Keqing",
        "quantity": "100",
        "price": 55000,
        "createdAt": "2022-01-19",
        "updatedAt": "2022-01-26"
    });
});
test("getAllProducts returns 404 when a data product not exists", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/api/product"
    });
    const response = httpMocks.createResponse();

    mockFindIdProduct.mockResolvedValue(null);

    await getAllProducts(request,response);

    expect(response.statusCode).toEqual(404);
    expect(response._getData()).toEqual("404 - Not found");
})

// Test for getProductById
test("getProductById returns an existing product", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/api/product/1",
        params: {
            id: 1,
        },
    });
    const response = httpMocks.createResponse();

    mockFindIdProduct.mockResolvedValue({
        id: "1",
        name: "Simp Keqing",
    });

    await getProductById(request, response);

    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        id: "1",
        name: "Simp Keqing",
    });
});
test("getProductById returns 404 when a product id does not exists", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/api/product/2",
        params: {
            id: 2,
        },
    });
    const response = httpMocks.createResponse();

    mockFindIdProduct.mockResolvedValue(null);

    await getProductById(request, response);

    expect(response.statusCode).toEqual(404);
    expect(response._getData()).toEqual("404 - Not found");
});

