var imageArray = []
var previous_random = 0
const getImages = ()=>{
    imageArray = []
    let bottomArray=[],leftArray = []
    document.querySelectorAll(".top").forEach((e)=>{
        imageArray.push(e)
    })

    document.querySelectorAll(".right").forEach((e)=>{
        imageArray.push(e)
    })

    document.querySelectorAll(".bottom").forEach((e)=>{
        bottomArray.push(e)
    })
    imageArray = [...imageArray, ...bottomArray.reverse()]

    document.querySelectorAll(".left").forEach((e)=>{
        leftArray.push(e)
    })
    imageArray = [...imageArray, ...leftArray.reverse()]

}

const random = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min
}


window.addEventListener('resize',()=>{
    getImages()
})




const transfrom = (id,array) =>{
    let tempIndex,len = array.length

    if(id==0){
        array[id].style.transition = "top 0.6s ease-out"
        array[len-1].style.transition = "top 0.6s ease-out"
        
        tempTop = array[id].style.top
        array[id].style.top = array[len-1].style.top 
        array[len-1].style.top = tempTop

        if(random(0,1)==1){
            array[id].style.zIndex = "1"
            array[len-1].style.zIndex = "0"
        }
        else{
            array[id].style.zIndex = "0"
            array[len-1].style.zIndex = "1"
        }
        tempIndex = array[id]
        array[id] = array[len-1]
        array[len-1] = tempIndex
        
    }
    else{
        array[id].style.transition = "left 0.6s ease-out, top 0.6s ease-out"
        array[id-1].style.transition = "left 0.6s ease-out, top 0.6s ease-out"

        
        tempTop = array[id].style.top
        array[id].style.top = array[id-1].style.top 
        array[id-1].style.top = tempTop

        if(random(0,1)==1){
            array[id].style.zIndex = "1"
            array[id-1].style.zIndex = "0"
        }
        else{
            array[id].style.zIndex = "0"
            array[id-1].style.zIndex = "1"
        }
        
        if(array[id-1].style.right && !(array[id-1].style.right && array[id].style.right)){
    
                tempLeft = array[id].style.left
                array[id].style.left = ""
                array[id].style.right =  array[id-1].style.right
                array[id-1].style.left = tempLeft
                array[id-1].style.right = ""
            
        }
        else if(array[id].style.right && !(array[id-1].style.right && array[id].style.right)){
            tempLeft = array[id-1].style.left
            array[id-1].style.left = ""
            array[id-1].style.right =  array[id].style.right
            array[id].style.left = tempLeft
            array[id].style.right = ""
        }
        else{
            tempLeft = array[id].style.left
            array[id].style.left = array[id-1].style.left 
            array[id-1].style.left = tempLeft
        }
        tempIndex = array[id]
        array[id] = array[id-1]
        array[id-1] = tempIndex
    }
}



setInterval(()=>{
    let rand
    do{
        rand = random(0,imageArray.length-1)
    }while(previous_random==rand || previous_random+1 ==rand || previous_random-1==rand)
    previous_random = rand
    transfrom(rand,imageArray)
},2200)

getImages()

// transfrom(17,imageArray)
