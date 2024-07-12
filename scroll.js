window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque",{
            transform:'translateX(-200%)',
            ease:"none",
            repeat:-1,
            duration:3
           
        })
        gsap.to(".marque img",{
            rotate:180,
        })

    }
    else{
        gsap.to(".marque",{
           transform:'translateX(0%)',
            ease:"none",
            repeat:-1,
            duration:3
        })
        gsap.to(".marque img",{
            rotate:0,
        })
    }
})