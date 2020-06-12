$(function() {
    var layer = layui.layer
    var form = layui.form
    var laypage = layui.laypage
    // 定义美化时间的过滤器器
    template.defaults.imports.dataFormat = function(date) {
        const dt = new Date(date)
        var y = dt.getFullYear()
        var m = padZero(dt.getMonth() + 1)
        var d = padZero(dt.getDate())
        var h = padZero(dt.getHours())
        var mm = padZero(dt.getMinutes())
        var ss = padZero(dt.getSeconds())
        return  y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + ss
    }
    // 定义补零的函数
    function padZero(n){
       return n > 9 ? n:'0' + n
    }
    //定义一个查询的参数对象 将来要请求数据的时候需要将请求参数对象提交到服务器
    var q = {
        pagenum:1, //页码值 默认显示为第一页
        pagesize:2,  //	每页显示多少条数据
        cate_id:'', //	文章分类的 Id
        state:'' //文章的状态，可选值有：已发布、草稿
    }
    initTable()
    initCate()
    // 获取文章数据的方法
    function initTable() {
        $.ajax({
            method:'GET',
            url:'/my/article/list',
            data:q,
            success:function(res) {
                if(res.status !== 0) {
                    return layer.msg('获取文章列表失败')
                }
            console.log(res)
            // 使用模板渲染页面数据
            var htmlStr = template('tpl-table',res)
            $('tbody').html(htmlStr)
            // 调用渲染分页的方法
            renderPage(res.total)
            }
        })
    }
    // 初始化文章分类
    function initCate() {
        $.ajax({
            method:'GET',
            url:'/my/article/cates',
            success:function(res){
                if(res.status !== 0){
                    return layer.msg('获取分类数据失败')
                }
                // 调用模板引擎分类的可选项
                var htmlStr = template('tpl-cate',res)
                $('[name=cate_id]').html(htmlStr)
                form.render()
            }
        })
    }
    // 为筛选表单绑定提交事件
    $('#fomr-search').on('submit',function(e){
        e.preventDefault()
        // 获取表单中选中项的值
        var cate_id = $('[name=cate_id]').val()
        var state = $('[name=state]').val()
        // 为查询对象中对应的属性赋值
        q.cate_id = cate_id
        q.state = state
        // 根据最新的筛选条件重新渲染表格的数据
        initTable()
    })
    // 渲染分页
    function renderPage(total){
        laypage.render({
            elem:'pageBox',
            count:total,
            limit:q.pagesize,
            curr:q.pagenum
        })
    }
    // 通过代理的形式为删除按钮绑定点击事件处理函数
    $('tbody').on('click','.btn-del',function(){
        var id = $(this).attr('data-id')
        layer.confirm('确认删除?', {icon: 3, title:'提示'}, function(index){
           $.ajax({
               method:'GET',
               url:'/my/article/delete/'+ id,
               success:function(res){
                if(res.status !== 0){
                    return  layer.msg('删除文章失败')
                }
                layer.msg('删除文章')
                initTable()
               }
           })
            
            layer.close(index);
          });
    })
})