<?php session_start(); ?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="max-age=604800" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="keywords" content="winter, pocketable, jacket, pack, travel, light, melbourne, tavel light, puffer, travel clothes, travel, compact, backpack, casuarwear, everyday wear, pouch clothing">
<meta name="decription" content="One of the biggest pocketable clothes and accessories in travel. Made in Melbourne. PCKD allows you to travel smart and pack easy">
	
	
<title>PCKD. | One of the Biggest Online Shopping Platform</title>

<link href="images/favicon.png" rel="shortcut icon" type="image/x-icon">

<!-- jQuery -->
<script src="js/jquery-2.0.0.min.js" type="text/javascript"></script>

<!-- Bootstrap4 files-->
<script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>

<!-- Font awesome 5 -->
<link href="fonts/fontawesome/css/all.min.css" type="text/css" rel="stylesheet">

<!-- custom style -->
<link href="css/ui.css" rel="stylesheet" type="text/css"/>
<link href="css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />

<!-- custom javascript -->
<script src="js/script.js" type="text/javascript"></script>

<!-- JavaScript shopping cart -->
<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="js/simplecartjs/simpleCart.js"></script>
<script src="js/simplecartjs-config.js"></script>	
<link rel="stylesheet" href="css/style.css">
	
	
<script type="text/javascript">
/// some script

// jquery ready start
$(document).ready(function() {
	// jQuery code

}); 
// jquery end
</script>

</head>
<body>
<header class="section-header">
<nav class="navbar p-md-0 navbar-expand-sm navbar-light border-bottom">
<div class="container">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTop4">
    <ul class="navbar-nav mr-auto">
    	<li class="nav-item dropdown">
		 	<a href="#" class="nav-link">   English </a>
		    
		</li>
		<li class="nav-item dropdown">
			<a href="#" class="nav-link"> AUD </a>
		</li>
    </ul>
    <ul class="navbar-nav">
		<li><a href="#" class="nav-link"> <i class="fa fa-envelope"></i> Email </a></li>
		<li><a href="#" class="nav-link"> <i class="fa fa-phone"></i> Call us </a></li>
	</ul> <!-- list-inline //  -->
  </div> <!-- navbar-collapse .// -->
</div> <!-- container //  -->
</nav>

<section class="header-main border-bottom">
	<div class="container">
<div class="row align-items-center">
	<div class="col-5">
		<a href="./" class="brand-wrap">
			<img class="logo" src="./images/PCKD_logo.png">
		</a> <!-- brand-wrap.// -->
	</div>
	<div class="col-3">
		<div class="category-wrap dropdown d-inline-block float-none">
			<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> Collections 
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="clothing.php">Casualwear</a>
				<a class="dropdown-item" href="outerwear.php">Outerwear</a>
				<a class="dropdown-item" href="./accessories.php">Accessories </a>
			</div>
		</div>  <!-- category-wrap.// -->
	</div> <!-- col.// -->
	
	<div class="col-4 d-flex justify-content-between">
		<a href="./store.php" class='text-dark'>Shop</a>
		<a href="./about-us.php" class='text-dark'>About Us</a>
		<a href="./contact-us.php" class='text-dark'>Contact Us</a>
		<a href="./faq.php" class='text-dark'>FAQ</a>
	</div>
</div> <!-- row.// -->
		
<div class="row">
	<div class="col-lg  col-md-6 col-sm-12 col">
		<form action="#" class="search">
			<div class="input-group w-100">
			    <input type="text" class="form-control" style="width:60%;" placeholder="Search by item keyword">
			    
			    <div class="input-group-append">
			      <button class="btn btn-primary" type="submit">
			        <i class="fa fa-search"></i>
			      </button>
			    </div>
		    </div>
		</form> <!-- search-wrap .end// -->
	</div> <!-- col.// -->
	<div class="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
		<div class="d-flex justify-content-end mb-3 mb-lg-0">
		<?php
			error_reporting(E_ALL & ~E_NOTICE);
			// session_start();
			
			if ($_SESSION["logged_in"] == 'true') {
				echo '
				<div class="widget-header">
					<small class="title text-muted">Welcome ' . $_SESSION["username"] . '!</small>
					<div> 
						<a href="./dashboard.php">My Page</a> <span class="dark-transp"> </span> |
						<a href="./logout.php">Logout</a> <span class="dark-transp"> </span>
					</div>
				</div>
				';
			}
			else {
				echo'
				<div class="widget-header">
					<small class="title text-muted">Welcome guest!</small>
					<div> 
						<a href="./signin-test.php">Sign in</a> <span class="dark-transp"> | </span>
						<a href="./register.php"> Register</a>
					</div>
				</div>
				';
			}
			?>
			<a href="./cart.php" class="widget-header pl-3 ml-3">
				<div class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></div>
				<span class="badge badge-pill badge-danger notify"><span class="simpleCart_quantity"></span></span>
			</a>
		</div> <!-- widgets-wrap.// -->
	</div> <!-- col.// -->
	</div>
	</div> <!-- container.// -->
</section> <!-- header-main .// -->




</header> <!-- section-header.// -->


<!-- ========================= SECTION MAIN ========================= -->
<section class="section-intro padding-y-sm">
<div class="container py-5">

<div class="intro-banner-wrap" style="overflow:hidden;">
	<div class="centered text-light"><i><h2>Save your space</h2></i></div>
	<div class="centered text-light" style="top:50%;"><h6>Discover our web-only exclusive offer</h6></div>
	<!-- <img src="https://source.unsplash.com/random/?star" alt="banner img" class="img-fluid rounded" style="height:400px; width:100%;"> -->
	<img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3Rhcnx8fHx8fDE2NTMzNzE5OTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="banner img" class="img-fluid rounded" style="height:400px; width:100%;">
</div>

</div> <!-- container //  -->
</section>
<!-- ========================= SECTION MAIN END// ========================= -->

<!-- ========================= SECTION  ========================= -->
<section class="section-name padding-y-sm">
<!-- Popular products -->
<div class="container py-5">

<header class="section-heading">
	<a href="./store.php" class="btn btn-outline-primary float-right">See all</a>
	<h3 class="section-title">🔥 Popular Items</h3>
</header><!-- sect-heading -->

<div class="row">
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/PANTS1-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">Wide Fit Pants</a>
				<div class="price mt-1">$50.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/PANTS2-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">Dapper Ankle Pants</a>
				<div class="price mt-1">$50.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/TSHIRT1-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">PCKD. T-Shirt (Coral)</a>
				<div class="price mt-1">$30.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/TSHIRT2-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">Long Sleeves</a>
				<div class="price mt-1">$40.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
</div>

</div><!-- container // -->

<!-- Collab -->
<div class="container py-5">

<header class="section-heading">
	<a href="./store.php" class="btn btn-outline-primary float-right">See all</a>
	<h3 class="section-title">✌️ PCKD X Collab</h3>
</header><!-- sect-heading -->

	
<div class="row">
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/PANTS3-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">PCKD x Collab Chino Pants</a>
				<div class="price mt-1">$55</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/PANTS5-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">PCKD x Collab Slim Ankle Pants</a>
				<div class="price mt-1">$55.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/TSHIRT4-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">PCKD x Collab Womens T-Shirt</a>
				<div class="price mt-1">$30.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/PUFFER1model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">PCKD x Collab Long Puffer Jacket</a>
				<div class="price mt-1">$150.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
</div>

	
<!-- Newest products	 -->
<div class="container">

<header class="section-heading">
	<a href="./store.php" class="btn btn-outline-primary float-right">See all</a>
	<h3 class="section-title">🚀 Newest Items</h3>
</header><!-- sect-heading -->

<div class="row">
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/WINDBREAKER4model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">Windbreaker (Olive)</a>
				<div class="price mt-1">$60.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/PUFFER2model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">Puffer Jacket (Navy)</a>
				<div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/TSHIRT1-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">PCKD. T-Shirt (Coral)</a>
				<div class="price mt-1">$30.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
	<div class="col-md-3">
		<div class="card card-product-grid">
			<a href="./product-detail.php" class="img-wrap"> <img src="images/products/TSHIRT5-model.png"> </a>
			<figcaption class="info-wrap">
				<a href="./product-detail.php" class="title">Round Neck Long Sleeves</a>
				<div class="price mt-1">$40.00</div> <!-- price-wrap.// -->
			</figcaption>
		</div>
	</div> <!-- col.// -->
</div>

</div><!-- container // -->
	
	
</div><!-- container // -->	
</section>

	
<!-- Newsletter subscription -->
<div class="d-flex flex-column justify-content-center align-items-center my-5 py-5" style="background-color:grey;">
   <h2 class='text-white'>Subscribe to our weekly newsletter</h2>
	<p class='text-light'>Subscribe our channel to get access to weekly exclusive offer !</p>
		<div class="col-6 form-group pr-0 d-flex flex-column justify-content-center align-items-center">
		  <input type="email" name="email" class="form-control mb-3" aria-describedby="emailHelp" placeholder="Type your email" required>
		  <button type="button" class="btn btn-primary">Subscribe</button>
		</div>
</div>
	
<!-- PCKD social container starts -->
<div class="w-100 pb-5 d-flex justify-content-center">
  <div class="text-center w-100">
    <div class="divider d-flex align-items-center mt-5">
      <h2 class="text-center fw-bold mx-3 mb-0 text-uppercase py-4 w-100" style="font-weight:700;">PCKD. Social</h2>
    </div>
	  <h3>@pckd_official</h3>
    <p class="text-center mx-3 mb-0 mb-3" style="font-weight:400;">We love seeing your post! Tag us or share a photo for a chance to be featured.</p>
  <a href="#" target="_blank">
    <div class="instaPost-container d-flex" style="overflow-x:scroll;">
     	<img src="https://source.unsplash.com/random/?outfit" alt="insta img" style="width:30%; min-width:100px;">
		<img src="https://source.unsplash.com/random/?outfit" alt="insta img" style="width:30%; min-width:100px;">
		<img src="https://source.unsplash.com/random/?outfit" alt="insta img" style="width:30%; min-width:100px;">
		<img src="https://source.unsplash.com/random/?outfit" alt="insta img" style="width:30%; min-width:100px;">
		<img src="https://source.unsplash.com/random/?outfit" alt="insta img" style="width:30%; min-width:100px;">
    </div>
  </a>
  </div>
</div>
	
<!-- Newsletter subscription  -->
<div class="d-flex justify-content-center align-items-center my-5 py-5">
    <div class="col-4 hide_mobile_size">
      <img src="images/PCKD_logo.png" alt="logo with inquiry form" style="opacity:30%; width:80%;"/>
    </div>
    <div class="col-8 email_inquiry-form" style="width:60%; max-width:650px;">
      <h2 class="text-uppercase">Wanna get in touch with us?</h2>
      <span class="hide_mobile_size" class="text-light">Please use the following form or send inquiry directly to us</span><span class="hide_mobile_size"><i>"info@pckd.com"</i></span>
      <!-- Please submit the following form <br> or contact us directly through email: -->
      <form action="#" method="POST">
          <div class="row">
            <div class="col-6 form-group pr-0">
              <input type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" required>
            </div>
            <div class="col-6 form-group">
              <input type="text" name="inquirer" class="form-control" placeholder="Name" required>
            </div>
          </div>
          <div class="row">
            <div class="col form-group">
              <select name="inquiry_topic" class="form-control py-0" required>
                <option selected disabled hidden value="">Inquiry topic</option>
                <option value="wholesale">About Wholesale</option>
                <option value="business">About Business</option>
                <option value="about item">About item</option>
                <option value="career">About Career</option>
                <option value="etc">Etc</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col form-group mb-2">
              <textarea class="form-control" name="inquiry_content" rows="5" placeholder="Please share your inquiry" required></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-secondary mt-2 w-100">Submit </button>
      </form>
    </div>
</div>

<div style="background-color:grey;">
<!-- ========================= FOOTER ========================= -->
<footer class="section-footer border-top">
	<div class="container">
		<section class="footer-bottom border-top row">
			<div class="col-md-2">
				<p class="text-white"> &copy 2022 PCKD. </p>
			</div>
			<div class="col-md-8 text-md-center" style="color: rgba(255,255,255, 0.7)">
				<span  class="px-2">info@pckd.com</span>
				<span  class="px-2">+61-123-4567</span>
				<span  class="px-2">124 La Trobe St, Melbourne VIC 3000</span>
			</div>
			<div class="col-md-2 text-md-right text-muted">
				<i class="fab fa-lg fa-cc-visa"></i>
				<i class="fab fa-lg fa-cc-paypal"></i>
				<i class="fab fa-lg fa-cc-mastercard"></i>
			</div>
		</section>
	</div><!-- //container -->
</footer>
<!-- ========================= FOOTER END // ========================= -->
</div>
</body>
</html>