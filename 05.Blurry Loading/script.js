const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;
let int = setInterval(loadAcitve, 30)

function loadAcitve() {
  load++
  loadText.innerHTML = `${load}%`
  if (load > 99) {
    clearInterval(int)
  }

  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}









// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}













/**
 * 1.document로 bg, loading text를 빌려옴
 * 
 * 2.loading text에 넣어줄 값을 생성 변수(load)= 넣어줄 값(0)을 생성하고
 * 100까지 올가야하니 ++을 사용 => load++ 
 * 
 * 3.클릭하여 count 하는 방식이 아니니 setIntaval을 사용하여
 * let int = setIntaval(콜백함수, 시간)을 사용해야하나 콜백함수를 넣어줘야하니 
 * load++에 함수를 감싼다 그러면 function blurring(){ load ++} 생성한 함수를
 * 적용하면 setIntaval(blurring, 30)으로 만들어 주면 30ms 마다 값이 1오름
 * 
 * 4. 이렇게 적용하고 돌리면 값이 무한으로 올가니 조건문을 사용하여 100에서 멈추게 설정 if(load>99){clearIntaval(종료할 함수, 변수 즉 int를 넣어준다)} 
 * 
 * 5.이제 load를 inneText를 사용하여 loading-text에 넣어준다.
 * 
 * 6.이제 텍스트를 0 -> 100으로 갈 수록 글자가 희미하게 즉 opacity를 1 -> 0으로 만들어 준다 그때 사용하는 것이 위에 scale 함수 요약하면
 * scale = {최솟값 -> 최댓값, 설정 최소 값 -> 설정 최대 값 };
 * 0에서 100으로 가야하니 최솟값엔 0을 최댓값엔 100을 넣어주고
 * opacity가 그에 맞춰 희매해져야하니 최소 값에 1 -> 최댓값 0을 넣어준다
 * 
 * 
 * 7.그 다음 배경을 블러를 0으로 낮춰야한다 위에 처럼 scale 적용하여
 * bg.style.filter = `blur(${saclae, 0, 100, 70, 0})px`
 * 
 * const loadText = document.querySelector('.loading-text');
 * const bg = document.querySelector('.bg')
 * 
 * 
 * let load = 0;
 * let int = setIntaval(blurring, 30);
 * 
 * function blurring(){
 * load++
 * 
 * if(load > 99){
 *  clearIntaval(int);
 * }//if
 * 
 * loadText.innerText = `${load}%`
 * loadText.style.opacity = `${scale(load, 0, 100, 1, 0)}`
 * bg.style.filter = `blur(${saclae(load, 0, 100, 70, 0)}px)`
 * 
 * 
 * 
 * }//function
 * 
 * 
 * 
 * 
 */