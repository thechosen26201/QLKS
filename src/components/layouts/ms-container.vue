<template>
  <!-- Book Apointment -->
  <div class="book-form mb30">
    <div class="inner-form">
      <div id="contact" method="post">
        <div class="inputs">
          <input type="text" placeholder="Tên khách sạn, thành phố, điểm đến"/>
          <!-- <input id="datepicker-example1" type="text" placeholder="Ngày đến"/> -->
          <!-- <input id="datepicker-example2" type="text" placeholder="Ngày đi"/> -->
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
  <!-- End Book Apointment -->

  <!-- Container -->
  <div class="wrapper">
    <!-- Latest Deals -->
    <div class="latest mb30">
      <h3>Latest Room Deals</h3>
      <div class="dark">
        <div class="column4 box">
          <div class="box-img">
            <img src="../../assets/images/rooms1.jpg" alt="" />
            <a href="#" class="details">Book Now!</a>
          </div>
          <h4>Grand Executive Suite</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet
          </p>
          <ul>
            <li>Quality Linens</li>
            <li>Individual Thermostat Control</li>
            <li>Fireplace and jetted tubs</li>
          </ul>
        </div>
        <div class="column4 box">
          <div class="box-img">
            <img src="../../assets/images/rooms1.jpg" alt=""/>
            <a href="#" class="details">Book Now!</a>
          </div>
          <h4>Deluxe Room</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet
          </p>
          <ul>
            <li>Plenty of soft and fluffy towels</li>
            <li>High speed Wi-fi access in every room</li>
            <li>Kitchenettes (limited Availability)</li>
          </ul>
        </div>
        <div class="column4 box">
          <div class="box-img">
            <img src="../../assets/images/rooms1.jpg" alt="" />
            <a href="#" class="details">Book Now!</a>
          </div>
          <h4>Traditional Room</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet
          </p>
          <ul>
            <li>The beds are extremly comfortable</li>
            <li>Telephone</li>
            <li>Hair Dryer</li>
          </ul>
        </div>
        <div class="column4 box first">
          <div class="box-img">
            <img src="../../assets/images/rooms1.jpg" alt="" />
            <a href="#" class="details">Book Now!</a>
          </div>
          <h4>Traditional Room</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet
          </p>
          <ul>
            <li>The beds are extremly comfortable</li>
            <li>Telephone</li>
            <li>Hair Dryer</li>
          </ul>
        </div>

        <div class="column4 box">
          <div class="box-img">
            <img src="../../assets/images/rooms1.jpg" alt="" />
            <a href="#" class="details">Book Now!</a>
          </div>
          <h4>Traditional Room</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet
          </p>
          <ul>
            <li>The beds are extremly comfortable</li>
            <li>Telephone</li>
            <li>Hair Dryer</li>
          </ul>
        </div>

        <div class="column4 box">
          <div class="box-img">
            <img src="../../assets/images/rooms1.jpg" alt="" />
            <a href="#" class="details">Book Now!</a>
          </div>
          <h4>Traditional Room</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet
          </p>
          <ul>
            <li>The beds are extremly comfortable</li>
            <li>Telephone</li>
            <li>Hair Dryer</li>
          </ul>
        </div>

        <div class="column4 box first">
          <div class="box-img">
            <img src="../../assets/images/rooms1.jpg" alt="" />
            <a href="#" class="details">Book Now!</a>
          </div>
          <h4>Traditional Room</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet
          </p>
          <ul>
            <li>The beds are extremly comfortable</li>
            <li>Telephone</li>
            <li>Hair Dryer</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <!-- End Latest Deals -->

    <div class="row3 dark mb30">
      <div class="accordion column6">
        <h3>Hotel Features</h3>
        <div id="accordion-container">
          <h2 class="accordion-header">Fast Check-in / Check-Out</h2>
          <div class="accordion-content">
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat
            </p>
          </div>
          <h2 class="accordion-header">Free Self Parking for Cars</h2>
          <div class="accordion-content">
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat
            </p>
          </div>
          <h2 class="accordion-header">Site Seeing Tours</h2>
          <div class="accordion-content">
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat
            </p>
          </div>
        </div>
      </div>
      <!-- End Accordion -->

      <!-- Client Testimonials -->
      <div class="testimonials column6">
        <h3>Client Testimonials</h3>
        <ul
          class="bxslider fade p0 m0"
          data-autoslide="0"
          data-autoslide_on="0"
        >
          <li>
            <blockquote class="speech-bubble">
              <div class="quote-content">
                <p class="m0">
                  Sed mattis pretium ligula quis egestas. Proin adipiscing
                  ultricies tempor. Mauris fermentum velit sed orci suscipit ac
                  tincidunt est euismod. Fusce faucibus felis ut odio
                  ullamcorper in aliquam tortor sodales. Ut luctus nibh nec dui
                  blandit quis laoreet libero facilisis.
                </p>
                <span class="quote-arrow"></span>
              </div>
              <div class="quote-meta">
                <strong>John Smith</strong>
                <span>- Web Designer</span>
              </div>
            </blockquote>
          </li>
          <li>
            <blockquote class="speech-bubble">
              <div class="quote-content">
                <p class="m0">
                  Sed mattis pretium ligula quis egestas. Proin adipiscing
                  ultricies tempor. Fusce faucibus felis ut odio ullamcorper in
                  aliquam tortor sodales. Ut luctus nibh nec dui blandit quis
                  laoreet libero facilisis.
                </p>
                <span class="quote-arrow"></span>
              </div>
              <div class="quote-meta">
                <strong>Diego Berry</strong>
                <span>- happy buyer</span>
              </div>
            </blockquote>
          </li>
          <li>
            <blockquote class="speech-bubble">
              <div class="quote-content">
                <p class="m0">
                  Sed mattis pretium ligula quis egestas. Proin adipiscing
                  ultricies tempor. Mauris fermentum velit sed orci suscipit ac
                  tincidunt est euismod.
                </p>
                <span class="quote-arrow"></span>
              </div>
              <div class="quote-meta">
                <strong>Alex Orange</strong>
                <span>- happy customer</span>
              </div>
            </blockquote>
          </li>
        </ul>
      </div>
      <!-- End Client Testimonials -->
      <div class="clear"></div>
    </div>
    <!-- End Row3 -->
  </div>
  <!-- End Wrapper -->
</template>

<script>

import {ElDatePicker} from 'element-plus';
export default {
  name: "MsHome",
  components: {
    ElDatePicker
  },
  data() {
    return {
      bookDate: '',
      leftDate: '' 
    }
  },
  methods: {
    
  },
  
};
</script>