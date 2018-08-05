$(function () {
    //初始化fullpage组件
    /*
    1.设置每一个屏幕的背景颜色
    2.设置屏幕内容的对齐方式，默认垂直居中，改成顶部对齐
    3.设置导航，设置指示器，点容器
    4.监听进入某一屏的时候 回调函数
     */
    $('.container').fullpage({
        //配置参数
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function (link, index) {
            //index 序号1开始 当前屏的序号
            $('.section').eq(index - 1).addClass('now');
        },
        //离开某一个页面的时候触发
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                //    当前是从第二页到第三页
                $('.section').eq(index - 1).addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                //    当前是从第三页到第四页
                $('.section').eq(index - 1).addClass('leaved');
            }
        },

        //    最好在插件初始完毕或者插件内容能够渲染完毕
        afterRender: function () {
            // console.log(this);
            //this里面没有api方法

            //jquery插件初始的时候封装这个方法
            /*
            1.jquery插件封装 $.fn.fullpage=function(){}
            2.jquery本身没有的通过$.fn的方式追加方法 --被认为是插件方法
            3.例如：$.fn.src=function(){ return this.attr('src')}, 此时的this（jquery对象）是你选择的谁就是谁
             */

            // 点击更多切换下一页
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
        },
        //页面切换的时间，默认是700ms
        scrolllingSpeed: 1000,
    });
});