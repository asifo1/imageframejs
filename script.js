const content = document.querySelector(".content")
const frame = document.querySelector(".frame")
var windowSize = document.documentElement.clientWidth
var limit = 10
const render = ()=>{
    let imgSize = (document.documentElement.clientWidth/100)*9
    let imgPositionTop = 0, imgPositionBottom = 0, imgPositionLeft = imgSize, imgPositionRight = imgSize
    let row = Math.ceil(content.clientHeight/imgSize)
    content.style.width = `${imgSize*(limit-2)}px`
    content.style.height = `${(row*imgSize).toFixed(2)}px`

    //Render Top images
    for(i=1;i<=limit;i++){
        img = document.createElement("img")
        img.src = `images/grid/${i}.jpg`
        img.style.width = `${imgSize}px`
        img.style.height = `${imgSize}px`
        img.style.position = "absolute"
        img.style.top = "0" 
        img.style.left = `${imgPositionTop}px`
        img.setAttribute("class","image top")
        imgPositionTop += imgSize
        
        frame.appendChild(img)
    }

    
    //Render right images
    for(i=limit+1;i<=limit+row;i++){
        img3 = document.createElement("img")
        img3.src = `images/grid/${i}.jpg`
        img3.style.width = `${imgSize}px`
        img3.style.height = `${imgSize}px`
        img3.style.position = "absolute"
        img3.style.right = "0" 
        img3.style.top = `${imgPositionRight}px`
        img3.setAttribute("class","image right")
        imgPositionRight += imgSize
        frame.appendChild(img3)
    }

    //Render Bottom images
    for(i=2*limit+row;i>=limit+row+1;i--){
        img2 = document.createElement("img")
        img2.src = `images/grid/${i}.jpg`
        img2.style.width = `${imgSize}px`
        img2.style.height = `${imgSize}px`
        img2.style.position = "absolute"
        img2.style.top = `${(imgSize*row)+imgSize}px`
        img2.style.left = `${imgPositionBottom}px`
        img2.setAttribute("class","image bottom")
        imgPositionBottom += imgSize
        frame.appendChild(img2)
    }

    //Render left images
    for(i=2*limit+2*row;i>=2*limit+row+1;i--){
        img3 = document.createElement("img")
        img3.src = `images/grid/${i}.jpg`
        img3.style.width = `${imgSize}px`
        img3.style.height = `${imgSize}px`
        img3.style.position = "absolute"
        img3.style.left = "0" 
        img3.style.top = `${imgPositionLeft}px`
        img3.setAttribute("class","image left")
        imgPositionLeft += imgSize
        frame.appendChild(img3)
    }
    frame.style.padding = `${imgSize}px`
}

const removeImages = () =>{
         document.querySelectorAll(".image").forEach((e)=>{
             e.remove()
         })
}



window.addEventListener('resize', () => {
    removeImages()
    content.style.height = "auto"
    if(document.documentElement.clientWidth<780){
        limit = 8
    }
    else{
        limit = 10
    }
    render()
})

render()



