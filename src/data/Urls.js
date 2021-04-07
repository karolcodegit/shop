const protocol = 'http';
const hostname = 'localhost';
const port = 3500;

export const restUrls = {
    Products: `${protocol}://${hostname}:${port}/api/products`,
    Categories: `${protocol}://${hostname}:${port}/api/categories`,
};
