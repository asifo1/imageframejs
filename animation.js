var imageArray = []
var rightImageArray = []
const getImages = ()=>{
    imageArray = []
    let bottomArray=[],leftArray = []
    document.querySelectorAll(".top").forEach((e)=>{
        imageArray.push(e)
    })

    document.querySelectorAll(".right").forEach((e)=>{
        rightImageArray.push(e)
    })
    imageArray = [...imageArray, ...rightImageArray]

    document.querySelectorAll(".bottom").forEach((e)=>{
        bottomArray.push(e)
    })
    imageArray = [...imageArray, ...bottomArray.reverse()]

    document.querySelectorAll(".left").forEach((e)=>{
        leftArray.push(e)
    })
    imageArray = [...imageArray, ...leftArray.reverse()]

}


window.addEventListener('resize',()=>{
    getImages()
})

getImages()


const transfrom = (id,array) =>{
    let tempIndex
    array[id].style.transition = "left 0.4s ease-out, top 0.4s ease-out"
    array[id-1].style.transition = "left 0.4s ease-out, top 0.4s ease-out"
    array[id-1].style.zIndex = "1"
    tempTop = array[id].style.top
    array[id].style.top = array[id-1].style.top 
    array[id-1].style.top = tempTop
    
    tempLeft = array[id].style.left
    array[id].style.left = array[id-1].style.left 
    array[id-1].style.left = tempLeft
    
    tempIndex = array[id]
    array[id] = array[id-1]
    array[id-1] = tempIndex
    return id
}



// for(i=1;i<imageArray.length;i++){
//     transfrom(i,imageArray)
// }