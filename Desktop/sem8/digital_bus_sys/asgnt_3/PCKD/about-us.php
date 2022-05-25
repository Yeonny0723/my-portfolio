<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="max-age=604800" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="keywords" content="winter, pocketable, jacket, pack, travel, light, melbourne, tavel light, puffer, travel clothes, travel, compact, backpack, casuarwear, everyday wear, pouch clothing">
<meta name="decription" content="One of the biggest pocketable clothes and accessories in travel. Made in Melbourne. PCKD allows you to travel smart and pack easy">
	
<title>PCKD. | One of the Biggest Online Shopping Platform</title>

<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon">

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
			session_start();
			
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


	
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 70px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #e3e4e0;
  color: black;
}

.reference-section {
  padding: 50px;
  text-align: justify;
  background-color: #c7c7bb;
  color: white;
}

.container {
  padding: 0 5px;
	text-align: center
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
	
}

.title {
  color: grey;
	
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
	
}

<!-- ========================sticky social bar ========================= -->	
	
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {margin:0;height:2000px;}

.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}

.icon-bar a:hover {
  background-color: #000;
}

.facebook {
  background: #3B5998;
  color: white;
}

.twitter {
  background: #55ACEE;
  color: white;
}

.google {
  background: #dd4b39;
  color: white;
}

.linkedin {
  background: #007bb5;
  color: white;
}

.youtube {
  background: #bb0000;
  color: white;
}

.content {
  margin-left: 75px;
  font-size: 30px;
}
	
<!-- ========================= Body ========================= -->	
	
</style>
</head>
<body>

	
<div class="about-section">
  <h1>About PCKD.</h1><br>
  <p><i>"Packing is always a nightmare." - Stephanie Powers </i></p>
  <p><b>Packing light leaves you to live light and explore light.</b> <br> That is why we introduce to you PCKD.(Packed)</p>
		
	<p>
		PCKD. (Packed) is all about letting you travel light anywhere you go with 
the <br> pocketable clothing and accessories that can fit into a small pouch. <br>
		It takes smart packing, maximising space and reducing the weight of your luggage or backpack, <br>
allowing you to travel with no stress and explore places with compact packing.
</div>

<div>
	<img src="images/banners/bucketlistphoto.png" alt="travel" style="width:100%">
</div>
	
<br><br>

<h2 style="text-align:center">Our Founders</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/512/3233/3233515.png" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Juyeon Kim</h2>
        <p class="title">Executive Manager and Developer</p>
        <p>Juyeon is the executive manager of PCKD. She is the developer of this business. She is also passionate in developing programming.</p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/512/1864/1864509.png" alt="Juyeon Kim" style="width:100%">
      <div class="container">
        <h2>Julian Lieu</h2>
        <p class="title">Product Designer</p>
        <p>Julian is the product designer of our pocketable clothing and accessories. He is also behind our new technical clothing business. He's been passionate of designing all his life. Has designed for other company brands.</p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/512/949/949646.png" alt="John" style="width:100%">
      <div class="container">
        <h2>Iris Erigbuagas</h2>
        <p class="title">Marketing Manager</p>
        <p>Iris is passionate about delivering our business messages to the world. She previously worked in fashion retail and has a hobby of travelling. 
          She graduated with a Bachelor of Marketing at RMIT University, and since then, she has worked her way up as a Marketing Manager.  </p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</div>

	<div class="reference-section">
		<h2>References</h2><br>
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png" alt="icon" width="100" height="100">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ip_aEbXt--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/316791/257d10fa-c1e2-47fe-adb4-05d95cc5b4b9.png" alt="icon" width="100" height="100">
  <br><br>
		<p>Resize the browser window to see that this page is responsive by the way.</p>
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

