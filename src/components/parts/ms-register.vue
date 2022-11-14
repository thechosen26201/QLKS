<template>
    <div class="register">
		<div class="pop-up__container">
			<div class="pop-up__header">
				<h1>Đăng ký tài khoản</h1>
				<div class="quit__icon" @click="closeRegisterForm"><i class="fa-solid fa-xmark quitIcon"></i></div>
			</div>
			<div class="pop-up__main">
				<div class="customerName">
					<div class="input__title">Họ tên</div>
					<input type="text" name="" id="userName" maxlength="100" v-model="this.userInfo.customerName">
				</div>
				<div class="customerEmail">
					<div class="input__title">Email</div>
					<input type="text" name="" id="email" maxlength="100" v-model="this.userInfo.email">
				</div>
				<div class="phoneNumber">
					<div class="input__title">Số điện thoại</div>
					<input type="text" name="" id="phoneNumber" maxlength="50" v-model="this.userInfo.phoneNumber">
				</div>
				<div class="userName">
					<div class="input__title">Tên đăng nhập</div>
					<input type="text" name="" id="userName" maxlength="30" v-model="this.userInfo.userName">
				</div>
				<div class="password">
					<div class="input__title">Mật khẩu</div>
					<input type="password" name="" id="password" maxlength="30" v-model="this.userInfo.password">
				</div>
				<div class="password--confirmed">
					<div class="input__title">Xác nhận mật khẩu</div>
					<input type="password" name="" id="confirmed__password" maxlength="30" v-model="this.recheckedPassword">
				</div>
			</div>
			<div class="pop-up__footer">
				<div class="login__button" @click="clickRegisterButton">Đăng ký</div>
				<div class="registerLink">Bạn đã có tài khoản? <div class="register__now link">Đăng nhập ngay</div></div>
			</div>
		</div>
	</div>
	<!-- <MsMessage v-if="this.isMessageShow" :orderStatus="this.orderStatus" @closeMessage="closeMessage"/> -->
</template>

<script>
import axios from 'axios';
import RESOURCE from '../../resource.js';
// import MsMessage from './ms-message.vue';

export default {
    name: 'MsRegister',
    data() {
        return {
            isClose: false,
			userInfo: {},
			recheckedPassword: '',
			// isMessageShow: false
        }
    },
	methods: {
		/**
		 * Gửi tín hiệu đóng form đăng ký
		 * Author: nnkhanh 31/10/22
		 */
        closeRegisterForm() {
            this.$emit('closeRegisterForm', this.isClose);
        },

		/**
		 * Xử lý sự kiện click nút đăng ký
		 * Author: 09/11/22
		 */
		clickRegisterButton() {
			this.userInfo.accountCode= 'AC0002';
			this.userInfo.customerCode = 'CS0002';
			this.userInfo.customerAddress = 'Hà Nội';
			this.userInfo.dateOfBirth = new Date();
			this.createNewUser(this.userInfo);
		},
		createNewUser(obj) {
			try {
				axios.post(`${RESOURCE.connectionString.apiHeaderCreateNewUser}`, obj)
				.then(response => {
					console.log(response);
					alert("Đăng ký thành công");
					this.closeRegisterForm();
				})
				.catch(e => {
					console.log(e);
					alert("Đăng ký thất bại");
				})
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>