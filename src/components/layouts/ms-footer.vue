<template>
    <!-- Footer -->
	<footer>
	<div class="inner-footer dark">

		<div class="touch column3">
			<h4>Get in touch</h4>
			<form>
				<input name="name" type="text" value="Name" data-value="Name">
				<input name="email" type="text" value="E-mail" data-value="E-mail">
				<textarea name="message" data-value="Message" value="Message"></textarea>
				<input type="submit" value="Send">
			</form>
		</div>

		<div class="flickr column3">
			<h4>Flickr Gallery</h4>
			<ul>
				<li><a href="#"><img src="../../assets/images/flick1.jpg" alt=""></a></li>
				<li><a href="#"><img src="../../assets/images/flick2.jpg" alt=""></a></li>
				<li><a href="#"><img src="../../assets/images/flick3.jpg" alt=""></a></li>
				<li><a href="#"><img src="../../assets/images/flick4.jpg" alt=""></a></li>
				<li><a href="#"><img src="../../assets/images/flick5.jpg" alt=""></a></li>
				<li><a href="#"><img src="../../assets/images/flick6.jpg" alt=""></a></li>
				<div class="clear"></div>
			</ul>
		</div>

		<div class="text-widget column3">
			<h4>Working Hours</h4>
			<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum amet  nibh sed odio sit amet elit aliquet velit auctor ipsum gravida.</p>
			<p>Mon - Fri : <span>10 AM to 5 PM</span></p>
			<p>Sat - Sun : <span>10 AM to 2 PM</span></p>
		</div>

		<div class="contact column3">
			<h4>Contact us</h4>
			<p class="f-home">lorem ipsum street, melbourne, 2245</p>
			<p class="f-phone">+399 (500) 321 9548</p>
			<a href="#" class="f-mail">yourcompany@yourdomain.com</a>
		</div>
		<div class="clear"></div>
		<!-- End Contact -->

	</div>
	<!-- End inner Footer -->

	<div class="end-footer">
		<div class="lastdiv">
			<div class="copyright">
				© 2013 My Hotel, All Rights Reserved
			</div>

		<div id="back-to-top">
			<a href="#top">Back to Top</a>
		</div>

		<div class="clear"></div>
		</div>
	</div>
	</footer>
</template>

<script>
export default {
    name: 'MsFooter',
}
</script>