$(function() {
	// 点击“去注册账号”的链接
	$('#link_reg').on('click', function() {
		$('.login-box').hide()
		$('.reg-box').show()
	})

	// 点击“去登录”的链接
	$('#link_login').on('click', function() {
		$('.login-box').show()
		$('.reg-box').hide()
	})
	// 从layui中获取form对象
	var form = layui.form
	// 从layui中获取layer对象
	var layer = layui.layer
	// 通过form.verify 函数来校验规则
	form.verify({
		'pwd': [
			/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
		],
		rpwd: function(value) {
			var pwd = $('.reg-box [name=password]').val()
			if (pwd !== value) {
				return '两次密码输入不一致'
			}
		}
	})
	// 监听注册表单提交事件
	$('#form_reg').on('submit', function(e) {
		// 阻止表单默认提交
		e.preventDefault();
		// 发起Ajax的post请求
		var data = {
			username: $('#form_reg [name=username]').val(),
			password: $('#form_reg [name=password]').val()
		}
		console.log(data)
		$.post('http://ajax.frontend.itheima.net/api/reguser', data, function(res) {
			if (res.status !== 0) {
				return layer.msg(res.message)
			}
			layer.msg('注册成功')
			$('#link_login').click()
		})
	})
	// 监听登录表单提交事件
	$('#form_login').submit(function(e){
		// 阻止默认提交
		e.preventDefault()
		$.ajax({
			url:'http://ajax.frontend.itheima.net/api/login',
			method:'POST',
			// 快速获取表单里的数据
			data:$(this).serialize(),
			success:function(res){
				if(res.status !== 0){
					return layer.msg('登陆失败')
				}
				layer.msg('登陆成功')
				//将登录成功后的 token 字符串保存
				localStorage.setItem('token', res.token)
				// 跳转到后台主页
				location.href  = '/index.htlm'
			}
			
		})
	})
})
