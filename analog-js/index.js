let h= document.getElementById('hours')

let m= document.getElementById('mins')

let s= document.getElementById('seconds')


window.addEventListener('load',()=>{
   setInterval(()=>{
    const now = new Date()
    let hours = now.getHours()
    let mins = now.getMinutes()
    let seconds = now.getSeconds()

    let hr= (hours % 12) * 30 + (seconds / 60) * 30;
    let mr= mins * 6
    let sr = seconds *6

    h.style.transform = `rotate(${hr}deg)`
    m.style.transform = `rotate(${mr}deg)`
    s.style.transform = `rotate(${sr}deg)`
   })
})