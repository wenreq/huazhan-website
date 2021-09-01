var video = document.getElementsByTagName('video')
for(var i = 0; i < video.length; i++) {
    video[i].controls=false;
}

//自动播放
$('#myCarousel').carousel({
    //设置自动播放/2 秒
    interval: 3000,
});
// //设置垂直居中
// var $imgheight = $('.carousel-inner img').height() + 'px';
// $('.carousel-control').css('line-height', $imgheight);
// $(window).resize(function () {
//     var $height = $(imgheight).eq(0).height() ||
//         $(imgheight).eq(1).height() ||
//         $(imgheight).eq(2).height();
//     $('.carousel-control').css('line-height', $height + 'px');
// });
var imgheight = $('.auto').eq(0).height();
var textheight = $('.text').eq(0).height();
$(window).load(function () {
    $('.text').eq(0).css('margin-top', (imgheight - textheight) / 2 + 'px');
});
//响应式改变窗口大小函数执行变化
$(window).resize(function () {
    $('.text').eq(0).css('margin-top', (imgheight - textheight) / 2 + 'px');
});
var imgheight = $('.auto').eq(1).height();
var textheight = $('.text').eq(1).height();
$(window).load(function () {
    $('.text').eq(1).css('margin-top', (imgheight - textheight) / 2 + 'px');
});

$(window).resize(function () {
    $('.text').eq(1).css('margin-top', (imgheight - textheight) / 2 + 'px');
});
