export function main(){
  const gallery = document.querySelector(".gallery");
  const sliders = gallery.querySelectorAll(".item");
  const sliderWrapper = gallery.querySelector(".gallery-wrap");
  const sliderFields = gallery.querySelector(".gallery-inner");
  let offset = 280;

  // let width = sliders.length * 176 + (sliders.length - 1) * 58;
  let width = sliders.length * 176;
  sliderFields.style.width = `${width}px`;
  let timerID = null;
  const stop = () => {
    if (timerID!=undefined){
      clearInterval(timerID);
      timerID = null;
    }
  }
  const moveRight = () => {
    if (!timerID){
      timerID = setInterval(()=>{
        offset+=10;
        sliderFields.style.transform = `translateX(-${offset}px)`;
        if (offset >= width){
         stop();
       }
      }, 100);
    }

  }
  const moveLeft = () => {
    if (!timerID){
      timerID = setInterval(()=>{
        offset-=10;
        sliderFields.style.transform = `translateX(-${offset}px)`;
        if (offset == 0){
         stop();
       }
      
      }, 100);
    }

  }
  

  document.querySelector(".gradright").addEventListener("mouseover", moveRight);
  document.querySelector(".gradright").addEventListener("mouseout", stop);

  document.querySelector(".gradright").addEventListener("touchstart", moveRight);
  document.querySelector(".gradright").addEventListener("touchend", stop);

  document.querySelector(".gradleft").addEventListener("mouseover", moveLeft);
  document.querySelector(".gradleft").addEventListener("mouseout", stop);

  document.querySelector(".gradleft").addEventListener("touchstart", moveLeft);
  document.querySelector(".gradleft").addEventListener("touchend", stop);
}