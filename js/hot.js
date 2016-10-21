function bid(id){
    return document.getElementById(id)
}
var arrowLeft = bid('arrow-left'),
    arrowRight = bid('arrow-right'),
    hotCon = qs('.hot-con .con'),
    i = 0,
    state = 1;
    arrowRight.onclick = function(e){
        if(state){
            console.log(hotCon.offsetLeft);
            i++;
            console.log(e);
            hotCon.classList.add('runLeft');
            state = 0;
        }
    };
    arrowLeft.onclick = function(e){
        if(state){
            console.log(hotCon.offsetLeft);
            i--;
            console.log(e);
            hotCon.classList.add('runRight');
            state = 0;
        }
    };
hotCon.addEventListener('webkitAnimationEnd',function(){
    state = 1;
    hotCon.classList.remove('runRight');
    hotCon.classList.remove('runLeft');
    console.log(i);
    hotCon.style.left = -(242*i) + 'px';
    console.log(hotCon.offsetLeft);
    hotCon.offsetLeft == 0 ? arrowLeft.classList.add('none') : arrowLeft.classList.remove('none');
    hotCon.offsetLeft == -726 ? arrowRight.classList.add('none') : arrowRight.classList.remove('none');
});
