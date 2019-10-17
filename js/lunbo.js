layui.use('carousel', function () {
    var carousel = layui.carousel;
    carousel.render({
        elem: '#test1',
        width: '375px', //设置容器宽度
        heigt:'120px',
        arrow: 'none', //不显示箭头
        interval:'3000'
    });
});