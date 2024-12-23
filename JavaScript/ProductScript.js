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


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      entry.target.classList.add('visible');
    } else {
      
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5
});

function displayProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';


  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');


    const isFavorite = favorites.includes(product.name);


    productDiv.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <div class="Under">
        <p>NT$${product.price}</p>
        <div class="Icon">
          <img src="Image/AddFavorites_Icon.png" alt="加入收藏" class="${isFavorite ? 'favorite' : ''}" onclick="addToFavorites('${product.name}', this)">
          <img src="Image/AddCart_Icon.png" alt="加入購物車">
        </div>
      </div>
    `;

    container.appendChild(productDiv);

    observer.observe(productDiv);
  });

  if (SearchListing === false)
  {
  CurrentProducts = products.map(product => ({
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image
  }));
}
}

window.onload = () => {
  ALLList();
};

let CurrentProducts = [];
let SearchListing = false;
function SearchList() {
  const input = document.getElementById('searchInput').value.toLowerCase();

  
  if (input === '') {
    displayProducts(CurrentProducts);
    SearchListing = false;
  } else {
    
    const filteredProducts = CurrentProducts.filter(product =>
      product.name.toLowerCase().includes(input) ||
      product.description.toLowerCase().includes(input)
    );

    
    if (filteredProducts.length > 0) {
      SearchListing = true;
      displayProducts(filteredProducts);
    } else {
      const container = document.getElementById('product-list');
      container.innerHTML = '<p>沒有符合條件的產品。</p>';
    }
  }
}

let FavoriteListing = false;
function FavoriteList() {
  if (FavoriteListing === false){
  const Breadcrumb = document.querySelector('.Breadcrumb');
  if (favorites.length === 0) {
    ShowNotification('還沒有收藏商品哦❤️');
  } else {
    FavoriteListing = true;
    const filteredProducts = products.filter(product => favorites.includes(product.name));

    const noFavoritesMessage = document.createElement('p');
    noFavoritesMessage.textContent = '收藏清單';
    
    displayProducts(filteredProducts);
    
    const separator = document.createElement('span');
    separator.textContent = ' ＞ ';
    Breadcrumb.appendChild(separator);

    
    const favoritesLink = document.createElement('a');
    favoritesLink.href = "#Favorites";
    favoritesLink.textContent = "收藏清單";
    Breadcrumb.appendChild(favoritesLink);
  }
  }
}
function ALLList() {
  FavoriteListing = false;
  const Breadcrumb = document.querySelector('.Breadcrumb');
  Breadcrumb.innerHTML = '';
  const breadcrumbLink = document.createElement('a');
  breadcrumbLink.href = "#VARIETIS";
  breadcrumbLink.textContent = "首頁";
  breadcrumbLink.onclick = function() {
    ALLList();
  };
  Breadcrumb.appendChild(breadcrumbLink);
  displayProducts(products);
}
