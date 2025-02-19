import gsap from 'gsap';

export const sectionHero=()=>{
    const tl=gsap.timeline()
    tl.from('.gsaphero',{opacity:0 , y:'10%'})
}