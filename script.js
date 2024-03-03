var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
  //  markers:true,
}})
tl.to("#fanta",{
    top:"115%",
    left:"12%"
},'orange')
tl.to("#orange-cut",{
    top:"160%",
    rotate:"360deg",

    left:"23%"
},'orange')
tl.to("#orange",{
    width:"15%",
    top:"171%",
    right:"7%"
},'orange')
tl.to("#leaf",{
    top:"105%",
    rotate:"360deg",
    left:"80%"
},'orange')
tl.to("#leaf2",{
    top:"105%",
    rotate:"360deg",
    left:"7.5%"
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:true,
   // markers:true,
}})

tl2.from(".lemon1",{
    top:"110%",
    rotate:"-90deg",
    left:"-100%"
},'ca')
tl2.from("#cocacola",{
    top:"110%",
    rotate:"-90deg",
    left:"-100%"
},'ca')

tl2.from(".lemon2",{
    top:"110%",
    rotate:"90deg",
    left:"100%"
},'ca')
tl2.from("#sprite",{
    top:"110%",
    rotate:"90deg",
    left:"5%"
},'ca')

tl2.to("#orange-cut",{
    top:"205%",
    width:"20%",
    left:"40%"
},'ca')
tl2.to("#fanta",{
    top:"199%",
    left:"40%", 
      
},'ca')