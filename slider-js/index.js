let holder = document.getElementById('s1')
let l = document.getElementById('l');
let r = document.getElementById('r');

const images = [
    {
      src: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
      alt: "A beautiful sunrise over the mountains",
      title: "Sunrise in the Mountains",
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      alt: "A calm beach with clear blue water",
      title: "Relaxing Beach",
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      alt: "A dense forest with towering trees",
      title: "Mystic Forest",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      alt: "A cityscape at night with bright lights",
      title: "City Lights at Night",
    },
    {
      src: "https://images.unsplash.com/photo-1441931423375-cc2d99eebb62",
      alt: "A serene lake surrounded by mountains",
      title: "Peaceful Lake",
    },
  ];

  const imgE= document.createElement("img");

 holder.appendChild(imgE);

 console.log(holder)
let index = 0;

function updateImage(){

    imgE.src=images[index].src

}

updateImage();


r.addEventListener('click',()=>{
    if(index===images.length-1){
        index=0;}
        else{
            index++;
            updateImage();
        }
})

l.addEventListener('click',()=>{
    if(index===0){
        index=images.length-1;}
        else{
            index--;
            updateImage();
        }
})
