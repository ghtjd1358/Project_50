const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scrollBox)

scrollBox()

function scrollBox() {
  // console.log(window.innerHeight)
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

     triggerBottom > boxTop ? box.classList.add('show') : box.classList.remove('show')
  })
}