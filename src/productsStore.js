

const productsArray = [
    {
        id: "price_1NnxL9CNlobo9MWJFvoi6shL",
        title: "Burger",
        price: 50.99
    },
    {
        id: "price_1NnxMgCNlobo9MWJExKhzoch",
        title: "Cola",
        price: 25.99
    },
    {
        id: "price_1NnxN8CNlobo9MWJBrJiqVjH",
        title: "Pizza",
        price: 120.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export  { productsArray, getProductData };