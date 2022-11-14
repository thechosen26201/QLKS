<template>
  <header>
    <div class="subheader clearfix">
      <div class="inner-subheader">
        <div class="subheader2">
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">FAQS </a></li>
            <li><a href="#">Informations</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div class="socials">
          <a href="#"><img src="images/tweet.png" alt="" /></a>
          <a href="#"><img src="images/feed.png" alt="" /></a>
          <a href="#"><img src="images/gplus.png" alt="" /></a>
          <a href="#"><img src="images/pin.png" alt="" /></a>
          <a href="#"><img src="images/fcb.png" alt="" /></a>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="upper-header dark">
        <div class="email column4">
          <a href="#">support@myhotel.com</a>
        </div>
        <div class="logo column4">
          <a href="#"><img src="images/logo.png" alt="" /></a>
        </div>
        <div class="phone column4">
          <p>(800) 186 49 123 456</p>
        </div>
        <div class="clear"></div>
      </div>
      <!-- End Upper Header -->
    </div>
    <!-- End Row2 -->
    <!-- Navigation -->
    <ms-navigation />
    <!-- Navigation -->
  </header>
</template>

<script>
import MsNavigation from "../parts/ms-navigation.vue";
export default {
  name: "MsHeader",
  components: {
    MsNavigation,
  },
};
</script>