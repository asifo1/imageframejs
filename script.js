const content = document.querySelector(".content")
const frame = document.querySelector(".frame")
var limit = 10
const render = ()=>{
    removeImages()
    let imgSize = (document.documentElement.clientWidth/100)*8
    let imgPositionTop = 0, imgPositionBottom = 0
    let row = Math.ceil(content.clientHeight/imgSize)
    content.style.width = `${imgSize*(limit-2)}px`

    //Render Top images
    for(i=1;i<=limit;i++){
        img = document.createElement("img")
        img.src = `images/grid/${i}.jpg`
        img.style.width = `${imgSize}px`
        img.style.height = `${imgSize}px`
        img.style.position = "absolute"
        img.style.top = "0" 
        img.style.left = `${imgPositionTop}px`
        img.setAttribute("class","image")
        imgPositionTop += imgSize
        frame.appendChild(img)
    }

    //Render Bottom images
    for(i=limit+1;i<=limit*2;i++){
        img2 = document.createElement("img")
        img2.src = `images/grid/${i}.jpg`
        img2.style.width = "8vw"
        img2.style.height = "8vw"
        img2.style.position = "absolute"
        img2.style.bottom = "0" 
        img2.style.left = `${imgPositionBottom}px`
        img2.setAttribute("class","image")
        imgPositionBottom += imgSize
        frame.appendChild(img2)
    }

    // //Render left images
    // for(i=limit+1;i<=limit*2;i++){
    //     img2 = document.createElement("img")
    //     img2.src = `images/grid/${i}.jpg`
    //     img2.style.width = "8vw"
    //     img2.style.height = "8vw"
    //     img2.style.position = "absolute"
    //     img2.style.left = "0" 
    //     img2.style.top = `${imgPositionBottom}px`
    //     img2.setAttribute("class","image")
    //     imgPositionBottom += imgSize
    //     frame.appendChild(img2)
    // }




    frame.style.padding = `${imgSize}px`
}

const removeImages = () =>{
         document.querySelectorAll(".image").forEach((e)=>{
             e.remove()
         })
}



window.onresize = () => {
    if(document.documentElement.clientWidth<780){
        limit = 8
    }
    else{
        limit = 10
    }
    render()
}

render()



