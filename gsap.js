gsap.to("#h1",{
    delay:1,
    duration:3,
    text:{
        value: "Welcome,2k25.",
        newClass:"text2",
        delimiter:"",
    },
}
);

gsap.to("#main",{
     opacity:1,
     duration:2,
     y:-15,
     ease:"power2.in",
}
);

gsap.from("#card",{
     delay:1,
     opacity:0,
     duration:3,
     ease:"power2.in",
     
}
);
