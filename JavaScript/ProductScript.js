// 假設 JSON 資料
const products = [
  {
    "name": "產品1",
    "price": 100,
    "description": "這是產品 1 的描述",
    "image": "Image/我是圖片.jpg"
  }
  ,
  {
    "name": "產品2",
    "price": 200,
    "description": "這是產品 2 的描述",
    "image": "Image/我是圖片.jpg"
  }
  ,
  {
    "name": "產品3",
    "price": 200,
    "description": "這是產品 2 的描述",
    "image": "Image/我是圖片.jpg"
  }
  ,
  {
    "name": "產品4",
    "price": 200,
    "description": "這是產品 2 的描述",
    "image": "Image/我是圖片.jpg"
  }
  ,
  {
    "name": "產品5",
    "price": 200,
    "description": "這是產品 2 的描述",
    "image": "Image/我是圖片.jpg"
  }
  
];

let favorites = [];

// 加入或移除收藏
function addToFavorites(productName, imgElement) {
  
  if (!favorites.includes(productName)) {
    favorites.push(productName);
    imgElement.classList.add('favorite');
  } else {
    favorites = favorites.filter(name => name !== productName);
    imgElement.classList.remove('favorite');
  }

}

/// 顯示產品函數
function displayProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = ''; // 清空現有內容

  // 動態生成產品列表
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // 檢查該產品是否已加入收藏，並改變圖示顏色
    const isFavorite = favorites.includes(product.name);

    productDiv.innerHTML = `
      <img src="${product.image}" class="Product-Image">
      <h3>${product.name}</h3>
      <div class="Product-Under">
        <p>NT$${product.price}</p>
        <div class="Product-Under-Icon">
          <img src="Image/Favorites_Icon.png" alt="加入收藏" class="${isFavorite ? 'favorite' : ''}" onclick="addToFavorites('${product.name}', this)">
          <img src="Image/Cart_Icon.png" alt="加入購物車">
        </div>
      </div>
    `;

    container.appendChild(productDiv);
  });
}

// 當頁面加載時，顯示所有產品
window.onload = () => {
  displayProducts(products);
};

// 搜尋產品功能
function SearchList() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(input) ||
    product.description.toLowerCase().includes(input)
  );

  displayProducts(filteredProducts);
}

function FavoriteList() {
  const filteredProducts = products.filter(product => favorites.includes(product.name));

  displayProducts(filteredProducts);
}