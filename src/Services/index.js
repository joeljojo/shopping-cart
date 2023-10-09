const BASE_URL = "https://fakestoreapi.com";

// This function enables us to fetch data from different endpoins
// Without writing redundant code
async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    const error = response.json();
    throw new Error(error.message);
  }
  const data = await response.json();
  return data;
}

async function fetchProducts() {
  return await fetchData("/products");
}

async function fecthCategories() {
  return await fetchData("/products/categories");
}

async function fetchProductsByCategory(category) {
  return await fetchData(`/products/categories/${category}`);
}

async function fetchProductById(productId) {
  return await fetchData(`products/${productId}`);
}

const productsApi = {
  fetchProducts,
  fecthCategories,
  fetchProductsByCategory,
  fetchProductById,
};

export default productsApi;
