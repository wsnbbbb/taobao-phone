layui.use('carousel', function () {
    var carousel = layui.carousel;
    carousel.render({
        elem: '#test2',
        width: '364px', //设置容器宽度
        heigt:'60px',
        anim:'updown',
        indicator:'none',
        arrow: 'none', //不显示箭头
        interval:'2000'
    });
});