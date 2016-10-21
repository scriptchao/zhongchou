var scrollLeft = bid('scroll-left'),
    scrollRight = bid('scroll-right'),
    scrollImg1 = qsa('.scroll1 img'),
    scrollImg2 = qsa('.scroll2 img'),
    scrollImg3 = qsa('.scroll3 img'),
    lenImgAll = scrollImg1.length,
    arrImg1 = [],
    arrImg2 = [],
    arrImg3 = [];

for(var i = 0; i < lenImgAll;i++){
    arrImg1.push(scrollImg1[i].src);
    arrImg2.push(scrollImg2[i].src);
    arrImg3.push(scrollImg3[i].src);
}
/*
console.log(lenImgAll);
console.log(arrImg1);
*/
scrollRight.onclick = function(){
    addLeft(scrollImg1);
};
scrollLeft.onclick = function(){
    addRight(scrollImg1);
};
EventListener(scrollImg1,arrImg1,scrollImg2);
EventListener(scrollImg2,arrImg2,scrollImg3);
EventListener(scrollImg3,arrImg3);
function addLeft(option){
    option[1].style.left = 0;
    for(var i = 0;i < lenImgAll;i++){
        option[i].classList.add('scrollLeft')
    }
}
function addRight(option){
    option[1].style.left = '-600px';
    for(var i = 0;i < lenImgAll;i++){
        option[i].classList.add('scrollRight')
    }
}
function remove(option1,option2){
    for(var i = 0;i < lenImgAll;i++){
        option1[i].classList.remove('scrollLeft');
        option1[i].classList.remove('scrollRight');
    }
    option1[0].src == option2[0]? option1[0].setAttribute('src',option2[1]):option1[0].setAttribute('src',option2[0]);
    option1[1].src == option2[1]? option1[1].setAttribute('src',option2[0]):option1[1].setAttribute('src',option2[1]);
}
function EventListener(option1,option2,option3){
    option1[0].addEventListener('webkitAnimationEnd',function(){
        remove(option1,option2);
        if(option1 == scrollImg3) return;
        if(option1[1].style.left == '0px'){
            addLeft(option3);
        }
        if( option1[1].style.left == '-600px'){
            addRight(option3);
        }
    });
}


