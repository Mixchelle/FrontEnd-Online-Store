export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  console.log(categoryId);
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductById(id) {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const requestJson = await request.json();
  return requestJson;
}

export async function addSong(song) {
  return localStorage.setItem('item', JSON.stringify(song));
}
