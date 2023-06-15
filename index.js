const headerEl = document.querySelector("header");
const progressBar = document.querySelector(".bar");
const coverTitle = document.querySelector(".cover-title");
const coverWrap = document.querySelector(".cover-wrap");
const dimd = document.querySelector(".dimd");
const contWrap = document.querySelector(".cont-wrap")

let scrollNum = 0;
let documentHeight = 0;
let per =0;
const coverHeight = window.innerHeight / 2;

coverWrap.style.height = coverHeight + "px";
//coverHeight = coverWrap.clientHeight;
contWrap.style.marginTop = coverHeight + "px";

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight + coverHeight - window.innerHeight;
    
    per = percent(scrollNum, documentHeight);
    
    progressBar.style.width = per + "%";
    console.log(documentHeight)
    console.log(scrollNum)

    //console.log(coverTitle)

    if(scrollNum >= coverHeight) {
        //console.log(123)
        headerEl.classList.add('fixed')
    }else {
        headerEl.classList.remove('fixed')
        coverTitle.style.top = -scrollNum / 10 + "px";
        coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
        dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`
    }

});

function percent(num, total) {
    return parseInt((num / total) * 100);
};

const cmtOpen = document.querySelector(".comment-open");

cmtOpen.addEventListener("click", () => {
    document.querySelector(".cmt-toggle").classList.toggle("hidden");
})