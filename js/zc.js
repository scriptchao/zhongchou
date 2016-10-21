function qs(ele) {
    return document.querySelector(ele);
}
function qsa(ele) {
    return document.querySelectorAll(ele);
}
var arrFloor = [
    {
        floor:'1F',
        name:'科技',
        arrow:'▶'
    },
    {
        floor:'2F',
        name:'生活',
        arrow:'▶'
    },
    {
        floor:'3F',
        name:'设计',
        arrow:'▶'
    },
    {
        floor:'4F',
        name:'娱乐',
        arrow:'▶'
    },
    {
        floor:'5F',
        name:'食品',
        arrow:'▶'
    },
    {
        floor:'6F',
        name:'公益',
        arrow:'▶'
    }
];
/*function ajax(option) {
    var xml = new XMLHttpRequest(),
        type = option.type,
        data = option.data;
    //readyState
    //0 请求未发送
    //1 请求打开
    //2 请求发送成功
    //3 服务端成功接收请求
    //4 服务端响应成功
    function queryString(data) {
        var str = "",
            i;
        for (i in data) {
            str += "&" + i + "=" + data[i];
        }
        return str.slice(1);
    }

    xml.onreadystatechange = function () {
        console.log(["请求未发送", "请求打开", "请求发送成功", "服务端成功接收请求", "服务端响应成功"][xml.readyState]);
        xml.readyState === 4 && xml.status === 200 && option.success(option.dataType === "json" ? JSON.parse(xml.responseText) : xml.responseText);
    };
    //打开请求
    xml.open(type, option.url + (type === "get" ? "?" + queryString(data) : ""), option.async);
    //设置请求头
    type === "post" && xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post
    //发送请求
    xml.send(type === "get" ? null : queryString(data));//get
}*/
window.onload = function () {
    $.ajax({
        type: "get",
        url: "http://www.ikindness.cn/api/test/getFund",
        dataType: "json",
        async: 1,
        success: function (data) {
            console.log(data);
            if (!data.code) {
                var script = document.createElement('script');
                script.src = 'http://www.ikindness.cn/api/test/getFund?jsonp=1';
                /*document.body.appendChild(script);*/
                $('body').append(script);
            }
        }
    })
};
var j = 0;
function jsonpCallback(data) {
    console.log(data);
    if (!data.code) {
        var _data = data.data,  //数组
            index = 0,
            len = _data.length / 8,
            arrData = [],
            /*floorAll = qs('.floorAll');*/
            floorAll = $('.floorAll')[0];
        for (; index < len; index++) {
            arrData[index] = _data.filter(function (item) {
                return item.type == index + 1
            })
        }
        arrData.forEach(function(item){
            createDiv(item);
        });
        function createDiv(option) {
            var  title = document.createElement('div'),
                 floor = document.createElement('div');
            floor.className = 'floor';
            title.className = 'title';
            title.innerHTML = '<span>' + arrFloor[j].floor + '</span>'+'<span>' + arrFloor[j].name + '</span>'+'<span>' + arrFloor[j].arrow + '</span>';
            j++;
            option.forEach(function (item) {
                /*console.log(item);*/
                var text = document.createElement('div');
                text.className = 'text';
                text.innerHTML = '<img src=\'' + item.image + '\'>';
                var item1 = document.createElement('div'),
                    item2 = document.createElement('div'),
                    item3 = document.createElement('div'),
                    item31 = document.createElement('div'),
                    item4 = document.createElement('div'),
                    span1 = document.createElement('span'),
                    span2 = document.createElement('span'),
                    span3 = document.createElement('span');
                    var em1 = document.createElement('em'),
                        em2 = document.createElement('em'),
                        em3 = document.createElement('em'),
                        em4 = document.createElement('em'),
                        em5 = document.createElement('em'),
                        em6 = document.createElement('em');
                    $(em1).text(Math.floor(item.rate/10) + '%');
                    $(em2).text('达成率');
                    $(em3).text(item.sum);
                    $(em4).text('已筹金额');
                    $(em5).text(item.amount);
                    $(em6).text('支持人数');
                    $(span1).append(em1).append(em2);
                    $(span2).append(em3).append(em4);
                    $(span3).append(em5).append(em6);


                    /*span1.appendChild(em1);
                    span1.appendChild(em2);
                    span2.appendChild(em3);
                    span2.appendChild(em4);
                    span3.appendChild(em5);
                    span3.appendChild(em6);*/
                item1.className = 'item1';
                item2.className = 'item2';
                item3.className = 'item3';
                item4.className = 'item4';
                $(item31).css('width',(item.rate/10) >= 100 ? 100 + '%': (item.rate/10) + '%');
                /*item31.style.width = ;*/
                /*console.log(item31.style.width);*/
                $(item3).append(item31);
               /* item3.appendChild(item31);*/
                $(item1).text(item.name);
                /*item1.innerText = item.name;*/
                var label = item.label;
                label.forEach(function(list){
                    $('<span></span>').text(list).appendTo(item2);
                   /* var span = document.createElement('span');
                    span.innerText = list;
                    item2.appendChild(span);*/
                });
                $(item4).append(span1).append(span2).append(span3);
               /* item4.appendChild(span1);
                item4.appendChild(span2);
                item4.appendChild(span3);*/
                $(text).append(item1).append(item2).append(item3).append(item4).appendTo(floor);
                /*text.appendChild(item1);
                text.appendChild(item2);
                text.appendChild(item3);
                text.appendChild(item4);
                floor.appendChild(text);*/
            });
            $(floorAll).append(title).append(floor);
            /*floorAll.appendChild(title);
            floorAll.appendChild(floor);*/
        }
    }
}



