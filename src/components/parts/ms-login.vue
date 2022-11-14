<template>
    <div class="login">
		<div class="pop-up__container">
			<div class="pop-up__header">
				<h2>Thông tin đăng nhập</h2>
				<div class="quit__icon" @click="closeLoginForm">
                    <i class="fa-solid fa-xmark quitIcon"></i>
                </div>
			</div>
			<div class="pop-up__main">
				<div class="userName">
					<div class="input__title">Email, tên đăng nhập hoặc số điện thoại</div>
					<input type="text" name="" id="userName">
				</div>
				<div class="password">
					<div class="input__title">Mật khẩu<div class="forgotPassword link">Quên mật khẩu?</div></div>
					<input type="text" name="" id="password">
				</div>
			</div>
			<div class="pop-up__footer">
				<div class="login__button">Đăng nhập</div>
				<div class="registerLink">Bạn chưa có tài khoản? <div class="register__now link" @click="openRegisterForm">Đăng ký ngay</div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'MsLogin',
    data() {
        return {
            isClose: false,
			isOpenRegister: false
        }
    },
    methods: {
		/**
		 * Gửi tín hiệu đóng form đăng nhập
		 * Author: nnkhanh 31/10/22
		 */
        closeLoginForm() {
            this.$emit('closeLoginForm', this.isClose)
        },

		/**
		 * Gửi tín hiệu mở form đăng ký
		 * Author: nnkhanh 01/11/22
		 */
		openRegisterForm(){
			this.closeLoginForm();
			this.emitter.emit("openRegisterForm", !this.isOpenRegister);
		}
    },
}
</script>