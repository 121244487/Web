const SquareImagesList = [
  { "image": "Image/Square/Square01.jpg" },
  { "image": "Image/Square/Square02.jpg" },
  { "image": "Image/Square/Square03.jpg" },
  { "image": "Image/Square/Square04.jpg" },
  { "image": "Image/Square/Square05.jpg" },
  { "image": "Image/Square/Square06.jpg" },
  { "image": "Image/Square/Square07.jpg" },
  { "image": "Image/Square/Square08.jpg" },
  { "image": "Image/Square/Square09.jpg" },
  { "image": "Image/Square/Square10.jpg" },
  { "image": "Image/Square/Square11.jpg" }
];

let CurrentPosIndex;
let CurrentListIndex;
let intervalId = null;

function changeImage() {
  const Pos = document.querySelectorAll('.AutoCarousel02 .Img img');
  
  CurrentListIndex = (CurrentListIndex + 1) % SquareImagesList.length;
  
  Pos[CurrentPosIndex - 1].src = SquareImagesList[CurrentListIndex].image;
  Pos[CurrentPosIndex].style.opacity = 0;

  setTimeout(() => {
    Pos[CurrentPosIndex].src = SquareImagesList[CurrentListIndex].image;
    Pos[CurrentPosIndex].style.opacity = 1;
    CurrentPosIndex = (CurrentPosIndex + 2) % Pos.length;
  }, 1000);
}

function UpdateImages() {
  
  const container = document.querySelector('.AutoCarousel02');
  const screenWidth = window.innerWidth;

  let numImgDivs;
  if (screenWidth >= 1280) {
    numImgDivs = 7;  // 大螢幕顯示 7 列
  } else if (screenWidth >= 1024) {
    numImgDivs = 5;  // 中等螢幕顯示 5 列
  } else if (screenWidth >= 600) {
    numImgDivs = 3;  // 小螢幕顯示 3 列
  } else {
    numImgDivs = 2;  // 可以根據需求設定其他顯示數量
  }

  CurrentListIndex = numImgDivs - 1;
  CurrentPosIndex = 1;

  // 先清空容器內的所有內容
  container.innerHTML = '';

  // 動態生成 Img div 和其中的 img 元素
  for (let i = 0; i < numImgDivs; i++) {
    const imgDiv = document.createElement('div'); // 創建新的 div
    imgDiv.className = 'Img'; // 給 div 添加 Img 類別
    
    // 為每個 Img div 添加兩張圖片
    for (let j = 1; j <= 2; j++) {
      const img = document.createElement('img');
      img.src = SquareImagesList[i].image; // 設定圖片來源
      imgDiv.appendChild(img);
    }

    container.appendChild(imgDiv);  // 把 Img div 添加到 AutoCarousel 容器中
  }

  // 確保 setInterval 只設置一次
  if (intervalId === null) {
    intervalId = setInterval(changeImage, 1500);
  }
}


UpdateImages();


window.addEventListener('resize', UpdateImages);
