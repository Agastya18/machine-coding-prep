

const show = document.getElementById('showbtn')
const hide = document.getElementById('closebtn')

const popup = document.getElementById('popup')

show.addEventListener('click', () => {
  popup.style.display = 'block'
  show.style.display = 'none'
  document.body.style.backgroundColor='#9EA9B1'
})

hide.addEventListener('click', () => {
    popup.style.display = 'none'
    show.style.display = 'block'
    document.body.style.backgroundColor = "#09dbd450";
});