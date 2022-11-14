<template>
    <div class="order-container">
        <!-- <div class="order-header"></div> -->
        <div class="order-main">
            <div class="order-submain">
                <div class="contactInfo">
                    <div class="contactInfo--main">
                        <div class="input__area white">
							<div class="contactInfo__title title"><h2>Thông tin liên hệ</h2></div>
                            <div class="large">
                                <div class="input__title">Họ tên <span class="required">*</span></div>
                                <input type="text" placeholder="Họ và tên" class="none-lib" v-model="this.customerName" maxlength="255" tabindex="1" @blur="validateRequired">
                            </div>
                            <div class="small">
                                <div class="left">
                                    <div class="input__title">Email <span class="required">*</span></div>
                                    <input type="text" placeholder="Email" class="emailInput none-lib" v-model="this.email" maxlength="100" tabindex="2" @blur="validateRequired">
                                    <div class="input__title">Ngày đến <span class="required">*</span></div>
                                    <el-date-picker
                                        type="text"
                                        v-model="this.bookedDate"
                                        :editable="true"
                                        :clearable="true"
                                        format="DD/MM/YYYY"
                                        placeholder="Ngày đến" class="wd-100" tabindex="3" @blur="validateRequired">
                                    </el-date-picker> 
                                    <!-- <input type="date" name="" id="" v-model="this.bookedDate"> -->
                                </div>
                                <div class="right">
                                    <div class="input__title">Số điện thoại <span class="required">*</span></div>
                                    <input type="text" placeholder="Số điện thoại" class="phoneNumber none-lib"
                                        v-model="this.phoneNumber" maxlength="50" tabindex="4" @blur="validateRequired">
                                    <div class="input__title">Ngày trả <span class="required">*</span></div>
                                    <el-date-picker
                                        type="text"
                                        v-model="this.leftDate"
                                        :editable="true"
                                        :clearable="true"
                                        format="DD/MM/YYYY"
                                        placeholder="Ngày đến" class="wd-100" tabindex="5">
                                    </el-date-picker> 
                                    <!-- <input type="date" name="" id="" v-model="this.leftDate"> -->
                                </div>
                            </div>
                        </div>
                        <div class="payment__method white">
                            <div class="payment__item payment__title">Phương thức thanh toán</div>
                            <div class="payment__item" v-for="(payment, index) in this.paymentArray" :key="index">
                                <input type="radio" name="paymentItem" :value="index" v-model="this.index"/>
                                <div class="payment__name">{{payment.PaymentName}}</div>
                            </div>
                        </div>
                        <div class="order__submit">
                            <div class="order__button" @click="createOrder">
                                Thanh toán ngay
                            </div>
                        </div>
                    </div>
                </div>
                <div class="roomInfo">
                    <div class="roomInfo--main">
                        <div class="roomDetail white">
                            <div class="quit__icon" @click="closeOrderForm" style="text-align: right;">
                                <i class="fa-solid fa-xmark quitIcon"></i>
                            </div>
							<div class="roomInfo__title title"><h2>Thông tin đặt phòng</h2></div>
                            <div class="header__detail">
                                <div class="detail--left">
                                    <div class="room__image"></div>
                                </div>
                                <div class="detail--right">
                                    <div class="room__name" style="text-align: left;">Phòng số: {{this.roomName}}</div>
                                    <div class="room__type" style="text-align: left;">Loại phòng: {{this.roomType}}</div>
                                    <div class="room__type" style="text-align: left;">Tên khách sạn: {{this.hotelName}}</div>
                                </div>
                            </div>
                            <div class="main__detail">
                                <div class="detail--left">
                                    <div class="bookDate">Ngày đến</div>
                                    <div class="leftDate">Ngày trả phòng</div>
                                    <div class="price">Giá phòng</div>
                                    <div class="discount">Giảm giá (%)</div>
                                    <div class="totalPrice">Tổng tiền</div>
                                </div>
                                <div class="detail--right">
                                    <!-- <div class="bookDate">{{this.formatDate(this.bookedDate)}}</div>
                                    <div class="leftDate">{{this.formatDate(this.leftDate)}}</div> -->
                                    <div class="bookDate">{{this.formatDate(this.bookedDate)}}</div>
                                    <div class="leftDate">{{this.formatDate(this.leftDate)}}</div>
                                    <div class="price">{{this.replaceNumber(parseInt(this.roomPrice))}}</div>
                                    <div class="discount">{{this.discountPercentage}}</div>
                                    <div class="totalPrice">{{this.replaceNumber(parseInt(this.roomPrice - this.roomPrice * this.discountPercentage / 100))}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MsMessage v-if="this.isMessageShow" :orderStatus="this.orderStatus" @closeMessage="closeMessage"/>
</template>

<script>
/* eslint-disable */ 
import RESOURCE from '../../resource.js';
import axios from 'axios';
import {ElDatePicker} from 'element-plus';
import MsMessage from './ms-message.vue';

export default {
    name: 'MsOrder',
    components: {ElDatePicker, MsMessage},
    data() {
        return {
            isClose: false,
            roomName: '',
            roomPrice: '',
            roomType: '',
            hotelName: '',
            customerName: 'Hoàng Thị Diễm',
            customerCode: 'U69765',
            phoneNumber: '0322717090',
            email: 'lmao123@gmail.com',
            paymentArray: [],
            discountPercentage: '',
            index: 0,
            order: {},
            bookedDate: '',
            leftDate: '',
            newCode: '',
            orderStatus: 0,
            isMessageShow: false
        }
    },
    props: ['pickedItem'],
    methods: {
        validateRequired() {
            try {
                if(this.customerName === ''||this.email === '' || this.phoneNumber === '' || this.bookedDate === ''|| this.leftDate === '') {
                    console.log(this.bookedDate);
                    return this.orderStatus = 2;
                }
                else {
                    return this.orderStatus = 0;
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Đóng hộp thoại thông báo
         * Author: nnkhanh 08/11/22
         */
        closeMessage(closeMessage) {
            return this.isMessageShow = closeMessage;
        },
        /**
         * Đóng form order
         * Author: nnkhanh 06/11/22
         */
        closeOrderForm() {
            this.$emit('closeOrder', this.isClose);
        },
        /**
         * Đặt biến cho từng loại phòng
         * Author: nnkhanh 06/11/22
         */
        setRoomType() {
            if(this.pickedItem.roomType === 0){
                return this.roomType = RESOURCE.roomType.standard;
            }
            else if (this.pickedItem.roomType === 1) {
                return this.roomType = RESOURCE.roomType.superior;
            }
            else if (this.pickedItem.roomType === 2) {
                return this.roomType = RESOURCE.roomType.deluxe;
            }
            else if (this.pickedItem.roomType === 3) {
                return this.roomType = RESOURCE.roomType.suite;
            }
            else {
                return this.roomType = RESOURCE.roomType.exsuite;
            }
        },
        /**
         * Format số ngăn cách dấu .
         * Author: nnkhanh 06/11/22
         */
        replaceNumber(number) {
            return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
        },
        /**
         * 
         */
        async getPayment() {
            try {
                await axios
                .get(`${RESOURCE.connectionString.apiHeaderPayment}`)
                .then(response => {
                    this.paymentArray = response.data;
                })
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * 
         */
        async getDiscount() {
            try {
                await axios
                .get(`${RESOURCE.connectionString.apiHeaderDiscount}`)
                .then(response => {
                    this.discountPercentage = response.data[0].DiscountPercentage;
                    console.log(this.discountPercentage);
                })
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Đặt giá trị cho object Order
         */
        setOrderObject() {
            try {
                this.order.orderCode = this.newCode;
                this.order.totalPrice = this.pickedItem.roomPrice * this.discountPercentage / 100;
                this.order.status = 0;
                this.order.roomID = this.pickedItem.roomID;
                this.order.roomName = this.pickedItem.roomName;
                this.order.bookedDate = this.bookedDate;
                this.order.leftDate = this.leftDate;
                this.order.hotelID = this.pickedItem.hotelID;
                this.order.hotelName = this.pickedItem.hotelName;
                this.order.hotelCode = "string";
                this.order.customerID = '1152da18-24d8-65b6-0380-e8e2a817c80e';
                this.order.customerCode = 'U69765';
                this.order.customerName = 'Hoàng Thị Diễm';
                this.order.phoneNumber = '0322717090';
                this.order.email = this.email;
                this.order.paymentID = this.paymentArray[this.index].PaymentID;
                this.order.paymentCode = this.paymentArray[this.index].PaymentCode;
                this.order.paymentName = this.paymentArray[this.index].PaymentName;
                this.order.createdDate = new Date();
                this.order.createdBy = "Khanh";
                this.order.modifiedDate = new Date();
                this.order.modifiedBy = "Khanh";
            } catch (error) {
                console.log(error);
            }
        },
        getNewCode() {
            try {
                axios.get(`${RESOURCE.connectionString.apiHeaderNewOrderCode}`)
                .then(response => {
                   this.newCode = response.data;
                })
                .catch(e => {
                    console.log(e);
                })
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Tạo đơn đặt hàng
         * Author: nnkhanh 09/11/22
         */
        createOrder() {
            try {
                this.setOrderObject();
                this.validateRequired();
                if (this.orderStatus !== 2) {
                    axios
                    .post(`${RESOURCE.connectionString.apiHeaderCreateNewOrder}`, this.order)
                    .then(response => {
                        this.orderStatus = 0;
                        this.showMessageForm();
                        console.log(response);
                    })
                    .catch(error => {
                        this.orderStatus = 1;
                        this.showMessageForm();
                        console.log(error);
                    }) 
                }
                else {
                    this.showMessageForm();
                }
            } catch (error) {
                console.log(error);
            }
        },
        
        showMessageForm() {
            return this.isMessageShow = true;
        },
        /**
         * Định dạng ngày tháng
         * Author: nnkhanh 08/11/22
         */
        formatDate(date) {
            try {
                return RESOURCE.formatDate(date);
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Tạo các object khi mở form
         * Author: nnkhanh 08/11/22
         */
        setUpForm() {
            this.roomName = this.pickedItem.roomName;
            this.roomPrice = this.pickedItem.roomPrice;
            this.hotelName = this.pickedItem.hotelName;
            this.setRoomType();
            this.getPayment();
            this.getDiscount();
            this.getNewCode();
        }
    },
    created() {
        this.setUpForm();
    },
    mounted() {
    },
}
</script>