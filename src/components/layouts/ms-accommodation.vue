<template>
  <div class="book-form mb30">
    <div class="inner-form">
      <div id="contact" method="post">
        <div class="inputs">
          <div class="comboboxHotel">
						<input type="text" placeholder="Tên khách sạn, thành phố, điểm đến" class="wd-100" @click="showHotelList" v-model="this.pickedHotelName">
						<div class="list-hotel" v-if="this.isHotelListShowed">
							<div class="list__item" v-for="(hotel, index) in this.hotelList" :key="index" @click="clickHotelListItem(hotel)">
                {{hotel.hotelName}}
              </div>
						</div>
					</div>
          <el-date-picker
            type="text"
            v-model="this.bookDate"
            :editable="true"
            format="DD/MM/YYYY"
            placeholder="Ngày đến">
          </el-date-picker> 
          <el-date-picker
              type="text"
              v-model="this.leftDate"
              :editable="true"
              format="DD/MM/YYYY"
              placeholder="Ngày đi">
          </el-date-picker> 
          <select>
            <option selected="selected" value="0">Số khách, số phòng</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div id="submit" type="submit">TÌM KIẾM</div>
      </div>
    </div>
  </div>
  
  <div class="wrapper dark">
	
    <div class="accomodation5-content">
      <!-- Latest Deals -->
      <div class="latest mb30">
        <div class="box mb20" v-for="(item, index) in this.roomArray" :key="index">
          <div class="box-img">
            <img src="../../assets/images/acc-list1.jpg" alt="">
            <a class="details" @click="openOrderForm(item)">Đặt ngay</a>
          </div>
          <div class="box-text">
            <h4>Phòng số {{item.roomName}} - Khách sạn: {{item.hotelName}}</h4>
            <p>Giá phòng: {{this.formatRender(parseInt(item.roomPrice))}} VNĐ</p>
            <ul>
              <li v-for="(service, i) in this.serviceArray[index]" :key="i">
                {{service.serviceName}}
              </li>
              <!-- <li>{{this.serviceArray[index]}}</li> -->
            </ul>
          </div>
          <div class="clear"></div>
        </div>
        
      </div>
      <!-- End Latest Deals -->
    </div>
		<el-pagination 
          background layout="prev, pager, next" :total="this.totalRecord" :small="true" 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"/>
	</div>
  <MsOrder v-if="isOrderShow" @closeOrder="closeOrder" :pickedItem="this.pickedItem"/>
</template>

<script>
import {ElDatePicker, ElPagination} from 'element-plus';
import axios from 'axios';
import MsOrder from '../layouts/ms-order.vue';
import RESOURCE from '../../resource.js';

export default {
  name: "MsAccommodation",
  components: {
    ElDatePicker,
    ElPagination,
    MsOrder
  },
  data() {
    return {
      bookDate: '',
      leftDate: '' ,
      isHotelListShowed: false,
      totalRecord: 0,
      pageSize: 10,
      pageNumber: 1,
      roomArray: [],
      hotelID: '',
      serviceArray: [],
      isOrderShow: false,
      pickedItem: {},
      hotelList: [],
      pickedHotelName: '', pickedHotelID: ''
    }
  },
  methods: {
    /**
     * Xử lý định dạng dữ liệu số
     * Author: nnkhanh 08/11/22
     */
    formatRender(number) {
      return RESOURCE.formatMoney(number);
    },

    /**
     * 
     */
    clickHotelListItem(hotel) {
      this.pickedHotelName = hotel.hotelName;
      this.pickedHotelID = hotel.hotelID;
      this.isHotelListShowed = false;
      this.getPaging();
    },
    /**
     * Gọi API phân trang
     * Author: nnkhanh 06/11/22
     */
    async getPaging(number = this.pageNumber) {
      try {
        let api = this.configStringAPI(this.pageSize, number, this.pickedHotelID);
        await axios
        .get(api)
        .then(response => {
          this.roomArray = response.data.data;
          this.totalRecord = response.data.totalCount;
          this.serviceArray = [];
          for (const iterator of this.roomArray) {
            this.getServiceName(iterator.hotelID);
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Gọi API lấy tên dịch vụ theo ID
     * Author: nnkhanh 06/11/22
     */
    getServiceName(id) {
      try {
        axios
        .get(`${RESOURCE.connectionString.apiHeaderService}/${id}`)
        .then(response => {
          this.serviceArray.push(response.data);
        })
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Lấy danh sách khách sạn
     * Author: nnkhanh 08/11/22
     */
    getHotel() {
      try {
        axios
        .get(`${RESOURCE.connectionString.apiHeaderHotel}`)
        .then(response => {
          this.hotelList = response.data;
        })
        .catch(e => {
          console.log(e);
        })
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Mở form đặt phòng
     * Author: nnkhanh 31/10/22
     */
    openOrderForm(item) {
      this.pickedItem = Object.assign({}, item);      
      return this.isOrderShow = true;
    },
    /**
     * Đóng OrderForm
     * Author: nnkhanh 31/10/22
     */
    closeOrder(close) {
      return this.isOrderShow = close;
    },

    /**
     * Hiện danh sách khách sạn
     * Author: nnkhanh 03/11/22
     */
    showHotelList() {
      return this.isHotelListShowed = !this.isHotelListShowed;
    },

    /**
     * Xử lý click chọn trang 
     * Author: nnkhanh 03/11/22
     */
    handleCurrentChange(value) {
      this.pageNumber = value;
      this.getPaging(this.pageNumber);
    },

    configStringAPI(pageSize, pageNumber, id) {
      if(id) {
        let substring = id;
        return `${RESOURCE.connectionString.apiHeaderRoom}?pageSize=${pageSize}&pageNumber=${pageNumber}&hotelID=${substring}`;
      }
      else {
        return `${RESOURCE.connectionString.apiHeaderRoom}?pageSize=${pageSize}&pageNumber=${pageNumber}`;
      }
    }
  },
  created() {
    this.getPaging();
    this.getHotel();
  },
};
</script>