// 假設 JSON 資料
const products = [
  {
    "name": "牙買加藍山咖啡豆",
    "price": 100,
    "description": "牙買加藍山咖啡被譽為世界上最頂級的咖啡之一，產量稀少且品質極高。得益於獨特的高海拔氣候、火山土壤與嚴格的生產標準，藍山咖啡展現出完美的平衡感。酸度不尖銳，風味層次豐富，香氣優雅且餘韻悠長，是追求高品質咖啡的愛好者心中的珍品。適合的烘焙程度：中焙，能保留其細膩的香氣與平衡的風味特徵。",
    "image": "Image/我是圖片.jpg"
  }
  ,
  {
    "name": "印尼蘇門答臘曼特寧咖啡豆",
    "price": 200,
    "description": "咖啡豆以其獨特的濕刨處理法聞名，這種方法賦予了咖啡濃厚的口感和低酸特質，特別適合喜歡深沉口味的咖啡愛好者。這款咖啡帶有自然的泥土與草本香氣，融合微妙的甜感與溫暖的餘韻，非常適合搭配濃縮咖啡或手沖煮法。適合的烘焙程度：中深焙至深焙，能更好展現其厚實的口感與香料氣息。",
    "image": "Image/我是圖片.jpg"
  }
  ,
  {
    "name": "埃塞俄比亞耶加雪菲咖啡",
    "price": 200,
    "description": "耶加雪菲咖啡被認為是非洲咖啡的代表之作，以其精緻的花果香氣聞名於世。高海拔和獨特的土壤條件賦予咖啡迷人的酸甜平衡，尤其是水洗處理法的版本，展現出清新優雅的柑橘與花香；而日曬處理法則帶有濃郁的莓果與熱帶水果風味。這款咖啡非常適合喜歡風味多層次、香氣馥郁的咖啡愛好者。適合的烘焙程度：淺焙至中焙，最能突出其風味的活潑性與香氣的細膩感。耶加雪菲咖啡尤其適合手沖與冰釀沖煮方式，是探索精品咖啡多樣風味的理想選擇之一。",
    "image": "Image/我是圖片.jpg"
  }
  ,  
  {
    "name": "危地馬拉安地瓜咖啡豆",
    "price": 200,
    "description": "安地瓜咖啡豆來自危地馬拉最著名的產區之一，這裡環繞著火山土壤，氣候穩定且排水良好，為咖啡提供了獨特的風味基礎。它的風味特點在於酸度、甜度與苦味的完美平衡，展現出濃郁的巧克力和堅果香氣，搭配微妙的香料風味，尤其適合喜歡經典口感的咖啡愛好者。適合的烘焙程度：中焙至中深焙，能充分展現其濃郁的可可與堅果特性，並突顯其平衡感。適合用於手沖、濃縮咖啡或美式咖啡，是一款風味穩重且適合日常飲用的精品咖啡豆。",
    "image": "Image/我是圖片.jpg"
  }
  ,
  {
    "name": "產品5",
    "price": 200,
    "description": "這是產品 5 的描述",
    "image": "Image/我是圖片.jpg"
  }
  
];

let favorites = [];

// 加入或移除收藏
function addToFavorites(productName, imgElement) {
  
  if (!favorites.includes(productName)) {
    favorites.push(productName);
    imgElement.classList.add('favorite');
    ShowNotification('✔️ 已加入收藏');
  } else {
    favorites = favorites.filter(name => name !== productName);
    imgElement.classList.remove('favorite');
    ShowNotification('❌ 已取消收藏');
  }
  
}

function ShowNotification(message) {
  let notification = document.querySelector('.Notification');

  notification.textContent = message;
  
  notification.classList.add('Show');
  
  setTimeout(() => {
    notification.classList.remove('Show');
  }, 1000);
}


// 設置 IntersectionObserver 來監控元素是否進入或離開視窗
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 當元素進入視窗時，添加 'visible' 類來觸發動畫
      entry.target.classList.add('visible');
    } else {
      // 當元素離開視窗時，移除 'visible' 類來隱藏
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5 // 觸發動畫的比例，0.5表示當元素至少 50% 進入視窗時觸發
});

// 動態生成產品並監控每個產品的顯示
function displayProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';  // 清空容器

  // 動態生成產品列表
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // 檢查該產品是否已加入收藏，並改變圖示顏色
    const isFavorite = favorites.includes(product.name);

    productDiv.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <div class="Under">
        <p>NT$${product.price}</p>
        <div class="Icon">
          <img src="Image/Favorites_Icon.png" alt="加入收藏" class="${isFavorite ? 'favorite' : ''}" onclick="addToFavorites('${product.name}', this)">
          <img src="Image/Cart_Icon.png" alt="加入購物車">
        </div>
      </div>
    `;

    // 把產品添加到容器中
    container.appendChild(productDiv);

    // 使用 IntersectionObserver 監控每個動態創建的商品
    observer.observe(productDiv);
  });
}


// 當頁面加載時，顯示所有產品
window.onload = () => {
  ALLList();
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
  const scheduleElement = document.querySelector('.Schedule');  // 確保選擇正確的元素

  // 清空目前顯示的內容
  scheduleElement.innerHTML = '';  

  if (favorites.length === 0) {
    // 如果 favorites 為空，顯示通知
    ShowNotification('目前還沒有收藏商品');
  } else {
    // 如果 favorites 有商品，過濾商品並顯示
    const filteredProducts = products.filter(product => favorites.includes(product.name));
    
    // 顯示收藏清單標題
    const noFavoritesMessage = document.createElement('p');
    noFavoritesMessage.textContent = '收藏清單';
    scheduleElement.appendChild(noFavoritesMessage);
    
    // 顯示篩選後的商品
    displayProducts(filteredProducts);
  }
}
function ALLList() {
  displayProducts(products);
}
