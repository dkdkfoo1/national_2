// 탭부분
const tab = document.querySelectorAll('.tab a')
const tab_contents = document.querySelectorAll('.tab_contents div')

console.log(tab, tab_contents)

for(let i of tab_contents)(i.style.display = 'none')
tab_contents[0].style.display = 'block'

tab.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        for(let i of tab_contents){
            i.style.display = 'none'
        }
        tab_contents[index].style.display = 'grid'
    })
})


for(let i of tab){
    i.addEventListener('mouseover',()=>{
        i.classList.add('change_color')
    })
}
for(let i of tab){
    i.addEventListener('mouseout',()=>{
        i.classList.remove('change_color')
    })
}
// 아코디언 부분
const acodian = document.querySelectorAll('.acodian')
const btn_acodian = document.querySelector('#btn_gone')

console.log(acodian)

for(i of acodian){
    i.addEventListener('click',function(){
        hideall();
        this.classList.add('active')
    })
}

function hideall(){
    for(j of acodian){
        j.classList.remove('active')
    }
}

// btn_acodian.addEventListener('click', hideall);

// 헤더부분
const header = document.querySelector('header')


function scrollEvent(){
    document.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 0){
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }
    });
}

function init(){
    document.addEventListener("scroll", scrollEvent);
}

init();

// 기타등등
const first = document.querySelector('.con1 h2')
const second = document.querySelector('.con4 h2')

ScrollTrigger.create({
    trigger:first,
    onEnter:()=> first.classList.add('toright')
})
ScrollTrigger.create({
    trigger:second,
    onEnter:()=> second.classList.add('toright')
})

