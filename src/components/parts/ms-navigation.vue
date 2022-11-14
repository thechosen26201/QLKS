<template>
    <div id="nav">
        <ul id="navlist" class="sf-menu clearfix">
            <!-- <li class="current"><router-link to="/home">Trang chủ</router-link></li> 
            <li>
                <router-link to="/accommodation">Đặt phòng khách sạn</router-link>
            </li>
            <li><a href="about.html">About us</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="news-1col.html">News</a> </li>
            <li><a href="contact.html">Contact Us</a></li> -->
            <li v-for="(item, index) in this.listNav" :key="index">
                <router-link :to="item.navLink">{{item.navName}}</router-link>
            </li>
            <li @click="openLoginForm">
                Đăng nhập
            </li>
        </ul>
    </div>
    <MsLogin v-if="this.isLoginOpen" @closeLoginForm="closeLoginForm"/>
    <MsRegister v-if="this.isRegisterOpen" @closeRegisterForm="closeRegisterForm"/>
</template>

<script>
/* eslint-disable */
import MsLogin from '../parts/ms-login.vue';
import MsRegister from '../parts/ms-register.vue';

export default {
    name: 'MsNavigation',
    components: {
        MsLogin,
        MsRegister
    },
    data() {
        return {
            listNav: [
                {navLink: '/home', navName: 'Trang chủ'},
                {navLink: '/accommodation', navName: 'Đặt phòng khách sạn'},
                {navLink: '', navName: 'About Us'},
                {navLink: '', navName: 'Gallery'},
                {navLink: '', navName: 'Testimonials'},
                {navLink: '', navName: 'News'},
            ],
            isLoginOpen: false,
            isRegisterOpen: false,
        }
    },
    methods: {
        /**
         * Mở form đăng nhập
         * Author: nnkhanh 
         * Created date: 31/10/22
         */
        openLoginForm() {
            return this.isLoginOpen = true;
        },
        /**
         * Đóng form đăng nhập
         * Author: nnkhanh 
         * Created date: 31/10/22
         */
        closeLoginForm(isClose) {
            return this.isLoginOpen = isClose;
        },
        /**
         * Đóng form đăng ký
         * Author: nnkhanh 31/10/22
         */
        closeRegisterForm(isClose) {
            return this.isRegisterOpen = isClose;
        }
    },
    mounted() {
        /**
         * Nhận tín hiệu mở form đăng ký
         */
        this.emitter.on("openRegisterForm", isOpen => {
            this.isRegisterOpen = isOpen;
        });
    },
}
</script>