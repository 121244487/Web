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

const Pos = document.querySelectorAll('.AutoCarousel .Img img');

Pos.forEach((img, index) => {
  const imageIndex = Math.floor(index / 2); // 每兩個圖片顯示相同的圖片
  img.src = SquareImagesList[imageIndex].image; // 設定圖片
});

let CurrentPosIndex = 1;
let CurrentListIndex = 2;

function changeImage() {
  // 隱藏當前圖片
  CurrentListIndex = (CurrentListIndex + 1) % SquareImagesList.length;
  Pos[CurrentPosIndex-1].src = SquareImagesList[CurrentListIndex].image;
  Pos[CurrentPosIndex].style.opacity = 0; 
  setTimeout(() => {
  Pos[CurrentPosIndex].src = SquareImagesList[CurrentListIndex].image;
  Pos[CurrentPosIndex].style.opacity = 1;
  CurrentPosIndex = (CurrentPosIndex + 2) % Pos.length;
}, 1000);
}

setInterval(changeImage, 1500);
