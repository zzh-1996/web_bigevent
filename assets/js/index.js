$(function () {
    // 调用 getUserInfo 获取用户的基本信息
    getUserInfo()
    var layer = layui.layer
    // 点击退出实现退出功能 
    $('#btnLogout').on('click', function () {
        // 提示用户是否退出
        layer.confirm('确定退出登录？', { icon: 3, title: '提示' }, function (index) {
            // 清空本地储存中的 token
            localStorage.removeItem('token')
            // 重新跳转到登录页面
            location.href = '/login.html'
            layer.close(index);
        });
    })
})
// 获取用户的基本信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        //请求头配置对象
        // headers:{
        //     Authorization:localStorage.getItem('token')||''
        // },
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            //调用 renderAvatar 渲染用户头像
            renderAvatar(res.data)
        }
        // complete: function (res) {
        //     if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！'){
        //     localStorage.removeItem('token')
        //     location.href = '/login.htmls'
        //     }
        // }
    })
}
//渲染用户头像
function renderAvatar(user) {
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}