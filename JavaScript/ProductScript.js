const products = [
  {
    "name": "牙買加藍山咖啡豆",
    "price": 999,
    "description": "牙買加藍山咖啡被譽為世界上最頂級的咖啡之一，產量稀少且品質極高。得益於獨特的高海拔氣候、火山土壤與嚴格的生產標準，藍山咖啡展現出完美的平衡感。酸度不尖銳，風味層次豐富，香氣優雅且餘韻悠長，是追求高品質咖啡的愛好者心中的珍品。。",
    "image": "Image/CoffeeBeans.jpg"
  }
  ,
  {
    "name": "印尼蘇門答臘曼特寧咖啡豆",
    "price": 999,
    "description": "咖啡豆以其獨特的濕刨處理法聞名，這種方法賦予了咖啡濃厚的口感和低酸特質，特別適合喜歡深沉口味的咖啡愛好者。這款咖啡帶有自然的泥土與草本香氣，融合微妙的甜感與溫暖的餘韻，非常適合搭配濃縮咖啡或手沖煮法。",
    "image": "Image/CoffeeBeans.jpg"
  }
  ,
  {
    "name": "埃塞俄比亞耶加雪菲咖啡",
    "price": 999,
    "description": "耶加雪菲咖啡被認為是非洲咖啡的代表之作，以其精緻的花果香氣聞名於世。高海拔和獨特的土壤條件賦予咖啡迷人的酸甜平衡，尤其是水洗處理法的版本，展現出清新優雅的柑橘與花香；而日曬處理法則帶有濃郁的莓果與熱帶水果風味。這款咖啡非常適合喜歡風味多層次、香氣馥郁的咖啡愛好者。",
    "image": "Image/CoffeeBeans.jpg"
  }
  ,  
  {
    "name": "危地馬拉安地瓜咖啡豆",
    "price": 999,
    "description": "安地瓜咖啡豆來自危地馬拉最著名的產區之一，這裡環繞著火山土壤，氣候穩定且排水良好，為咖啡提供了獨特的風味基礎。它的風味特點在於酸度、甜度與苦味的完美平衡，展現出濃郁的巧克力和堅果香氣，搭配微妙的香料風味，尤其適合喜歡經典口感的咖啡愛好者。",
    "image": "Image/CoffeeBeans.jpg"
  }
  ,
  {
    "name": "巴拿馬藝妓咖啡豆",
    "price": 999,
    "description": "巴拿馬藝妓咖啡以其卓越的風味和香氣被譽為世界頂級精品咖啡之一。它的名字來自埃塞俄比亞的藝妓品種，但在巴拿馬得到了完美的展現。這款咖啡擁有明亮的酸質和多層次的風味表現，特別是日曬版本會展現出更濃郁的果香，而水洗版本則更清新優雅。適合追求高端咖啡體驗的飲者。",
    "image": "Image/CoffeeBeans.jpg"
  }
 ,
  {
    "name": "肯亞 AA 咖啡豆",
    "price": 999,
    "description": "肯亞 AA 咖啡豆是肯亞咖啡的代表性品種，“AA”是肯亞分級制度中最高等級，表示豆粒飽滿、品質優越。其風味以明亮的果酸和濃郁的層次感著稱，經常帶有黑醋栗、莓果和柑橘的獨特香氣。這款咖啡的餘韻清新甜美，風味集中且鮮明，是喜歡酸質咖啡愛好者的理想選擇。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "夏威夷可娜咖啡豆",
    "price": 999,
    "description": "夏威夷可娜咖啡豆是美國唯一的大規模咖啡產區代表，以其溫暖的熱帶氣候、火山土壤和穩定的降水量聞名於世。可娜咖啡豆的風味以平衡和柔和著稱，酸質不突出但層次豐富，帶有甜美的堅果與柑橘香氣，特別適合追求輕鬆飲用體驗的咖啡愛好者。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "巴西桑托斯咖啡豆",
    "price": 999,
    "description": "巴西桑托斯咖啡豆是全球最廣為人知的巴西咖啡之一，以穩定的風味和高品質深受市場青睞。來自肥沃的低海拔地區，這款咖啡展現出醇厚的口感和柔和的低酸特性，非常適合作為濃縮咖啡或義式咖啡基底。日曬處理法賦予了豆子更多的天然甜味和濃郁堅果風味，讓人感到溫暖而滿足。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "祕魯咖啡豆",
    "price": 999,
    "description": "祕魯咖啡因有機種植的傳統和高品質聞名於世。其豆子來自安第斯山脈的肥沃土壤和涼爽氣候，造就了細膩而均衡的風味。祕魯咖啡的風格溫和親切，兼具柔和的果酸和甜美的焦糖特質，適合初學者與日常飲用。這款咖啡的香氣純淨且不過於濃烈，平衡感極佳，是咖啡愛好者探索精品豆時的一個經典選擇。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "坦尚尼亞皮貝里咖啡豆",
    "price": 999,
    "description": "坦尚尼亞皮貝里咖啡豆是一種特殊的咖啡豆類型，因果實內僅含單顆圓形豆子而得名，這些豆子往往比普通豆子更濃縮、更具風味。來自乞力馬扎羅山高海拔地區的肥沃火山土壤，賦予這款咖啡獨特的活潑酸質和多層次的果香。其風味特徵以濃郁的莓果和柑橘香氣著稱，伴隨輕盈的花香和微妙的酒感，是精品咖啡中不可錯過的選擇。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "薩爾瓦多帕卡瑪拉咖啡豆",
    "price": 999,
    "description": "帕卡瑪拉（Pacamara）是帕卡斯（Pacas）與瑪拉戈吉佩（Maragogipe）兩種品種的混種，擁有大型豆粒與獨特的風味特質。這款咖啡結合了帕卡斯的平衡感和瑪拉戈吉佩的複雜性，是薩爾瓦多精品咖啡的典範之作。帕卡瑪拉咖啡豆的風味豐富多變，帶有熱帶水果與莓果的清新酸質，並伴隨花香和甜美餘韻，特別適合追求風味層次的咖啡愛好者。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "哥倫比亞蘇普里莫咖啡豆",
    "price": 999,
    "description": "“蘇普里莫”（Supremo）代表哥倫比亞咖啡豆中最大的粒級，也是品質的象徵。這款咖啡豆以其完美的平衡感和豐富層次而受到廣泛喜愛。來自安第斯山脈的高海拔產區，結合肥沃的火山土壤和均勻的降水，使豆子風味集中且穩定。它兼具明亮的果酸和甜美的焦糖風味，適合作為日常飲用的精品咖啡。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "墨西哥契亞帕斯咖啡豆",
    "price": 999,
    "description": "契亞帕斯州位於墨西哥南部，因其高海拔的火山土壤和良好的生長條件，成為墨西哥最重要的咖啡產區之一。該地區種植的咖啡多為小規模農戶使用有機和傳統方法培育，這讓契亞帕斯咖啡擁有乾淨、細膩的風味。它的柔和酸質與甜美堅果香氣非常適合想要嘗試精品咖啡但不喜歡強烈風味的飲用者。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "蘇拉威西托拉雅咖啡豆",
    "price": 999,
    "description": "托拉雅咖啡是印尼咖啡的經典代表之一，以濃郁的風味和獨特的處理方式而聞名。濕刨法賦予豆子特殊的泥土與香料氣息，結合高海拔火山土壤，讓咖啡擁有豐富的層次感。托拉雅咖啡豆展現了濃厚的口感和低調的酸質，非常適合喜歡深沉、濃烈風味的咖啡愛好者。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "印度孟加拉邦莫納咖啡豆",
    "price": 999,
    "description": "孟加拉邦莫納咖啡豆的獨特之處在於其「季風處理法」。咖啡豆經過暴露在印度季風氣候下數周，吸收濕潤海風中的水分，顆粒膨脹，風味變得低酸、濃厚且富有泥土氣息。這一處理方式賦予咖啡獨特的煙燻和香料特徵，深受喜歡濃烈口感的咖啡愛好者喜愛。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "哥斯大黎加塔拉珠咖啡豆",
    "price": 999,
    "description": "塔拉珠咖啡以其清新活潑的酸質和平衡的風味聞名，帶有水果的自然甜感和柔和的餘韻。這款豆子非常適合喜愛果香調性及乾淨口感的咖啡愛好者，尤其能在手沖或濾杯萃取中完美呈現層次感。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "衣索比亞哈拉爾咖啡豆",
    "price": 999,
    "description": "哈拉爾咖啡豆以其濃厚的果香和甜美的風味著稱，是日曬咖啡的經典代表之一。這款豆子富有異國情調的風味，適合追求豐富層次與濃烈風味的咖啡愛好者。其鮮明的莓果香氣和自然甜感，特別適合濾杯或手沖方式沖煮，展現獨一無二的風味輪廓。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "越南羅布斯塔咖啡豆",
    "price": 999,
    "description": "越南羅布斯塔咖啡豆因高含咖啡因量（約為阿拉比卡豆的兩倍）和濃烈的風味而廣受歡迎，尤其在越南傳統滴漏咖啡（Ca Phe Phin）中常見。這款咖啡豆的厚實口感和濃郁香氣，特別適合搭配煉乳，製作越南冰咖啡，帶來深刻的味覺體驗。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "巴西喜拉多咖啡豆",
    "price": 999,
    "description": "巴西喜拉多咖啡豆通常帶有堅果和巧克力風味，口感平衡且圓潤，對於喜歡甜美與圓潤口感的咖啡愛好者尤其合適。適合用於濃縮咖啡或其他濃郁煮法。",
    "image": "Image/CoffeeBeans.jpg"
  }
,
  {
    "name": "哥斯大黎加安納圖咖啡豆",
    "price": 999,
    "description": "安納圖咖啡豆因其精緻的酸度和細膩的花香，受到咖啡愛好者的青睞。這款咖啡適合喜歡清新、圓潤口感的消費者，無論是手沖還是濾杯萃取都能展現其層次感。",
    "image": "Image/CoffeeBeans.jpg"
  }
];



let favorites = [];
let cart = [];
let CurrentProducts = [];
let SearchListing = false;

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

function addToCart(productName) {
  const product = products.find(item => item.name === productName);
  if (product) {
    
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1
      });
    }
  ShowNotification('已加入購物車🛒');
  CartList();
  }
  else {
    ShowNotification('商品不存在');
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
      <a href="ProductPage.html?name=${encodeURIComponent(product.name)}">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <h3>${product.name}</h3>
      <div class="Under">
        <p>NT$${product.price}</p>
        <div class="Icon">
          <img src="Image/AddFavorites_Icon.png" alt="加入收藏" class="${isFavorite ? 'favorite' : ''}" onclick="addToFavorites('${product.name}', this)">
          <img src="Image/AddCart_Icon.png" alt="加入購物車" " onclick="addToCart('${product.name}')">
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

function CartList() {
  const DropdownCart = document.querySelector('.Dropdown_Cart');
  
  // 清空購物車的內容（防止重複顯示）
  DropdownCart.innerHTML = '';

  cart.forEach((item, index) => {  // 在這裡加入 index 參數
    // 創建外層容器
    const row = document.createElement('div');
    row.classList.add('rows');

    // 商品圖片
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = '商品圖';
    row.appendChild(img);

    // topunder 區域
    const topunder = document.createElement('div');
    topunder.classList.add('topunder');

    // top 區域
    const top = document.createElement('div');
    top.classList.add('top');

    const name = document.createElement('div');
    name.classList.add('name');
    const nameText = document.createElement('p');
    nameText.textContent = item.name;
    name.appendChild(nameText);
    top.appendChild(name);

    const quantityLabel = document.createElement('p');
    quantityLabel.textContent = '數量:';
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = item.quantity;
    top.appendChild(quantityLabel);
    top.appendChild(quantityInput);

    // 監聽數量輸入事件
    quantityInput.addEventListener('input', (e) => {
      const newQuantity = parseInt(e.target.value);  // 取得新的數量
      if (newQuantity > 0) {  // 確保數量大於 0
        cart[index].quantity = newQuantity;  // 更新購物車中的商品數量
        CartList();  // 重新渲染購物車
        ShowNotification(`商品數量已更新為 ${newQuantity}`);
      } else {
        e.target.value = item.quantity;  // 如果數量不合法，重設為原來的數量
        ShowNotification('數量必須大於 0');
      }
    });

    topunder.appendChild(top);

    // under 區域
    const under = document.createElement('div');
    under.classList.add('under');

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `NT$${item.price}`;
    under.appendChild(price);

    // 垃圾桶圖示
    const trashIcon = document.createElement('img');
    trashIcon.src = 'Image/Trash_Icon.png';
    trashIcon.alt = '垃圾桶';
    trashIcon.classList.add('icon');
    trashIcon.addEventListener('click', () => {
      removeFromCart(index);  // 傳遞索引來刪除商品
    });
    under.appendChild(trashIcon);

    topunder.appendChild(under);

    // 將 topunder 加入 row
    row.appendChild(topunder);

    // 將整個商品行加入到 Dropdown_Cart
    DropdownCart.appendChild(row);
  });
}
function removeFromCart(index) {
  cart.splice(index, 1);  // 刪除商品
  CartList();  // 重新渲染購物車
  ShowNotification('❌ 商品已從購物車移除');
}
function addToCart(productName) {
  const product = products.find(item => item.name === productName);
  if (product) {
    
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1
      });
    }
  ShowNotification('已加入購物車🛒');
  CartList();
  }
  else {
    ShowNotification('商品不存在');
  }
}

















// 獲取當前頁面的檔案名稱
const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "ProductPage.html") {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("name");

  // 查找對應的商品
  const product = products.find((p) => p.name === productName);

  if (product) {
    // 更新產品圖片
    const productImage = document.querySelector(".product-image img");
    productImage.src = product.image;
    productImage.alt = product.name;

    // 更新產品名稱
    document.querySelector(".product-info h1").textContent = product.name;

    // 更新價格
    document.querySelector(".price").textContent = `NT$${product.price}`;

    // 更新描述
    document.getElementById("specifications").innerHTML = `<p>${product.description}</p>`;

    // 在 "其他商品" 中顯示推薦商品
    const recommendations = products.filter((p) => p.name !== productName);
    displayProducts(recommendations);
  } else {
    document.querySelector(".content").innerHTML = "<p>找不到相關產品資料。</p>";
  }
}
