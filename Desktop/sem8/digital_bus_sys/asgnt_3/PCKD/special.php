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




<!-- ========================= SECTION PAGETOP ========================= -->
<section class="section-pagetop bg">
<div class="container">
	<h2 class="title-page"><i>SPECIAL COLLABORATION</i></h2>
	
</div> <!-- container //  -->
</section>
<!-- ========================= SECTION INTRO END// ========================= -->

<!-- ========================= SECTION CONTENT ========================= -->
<section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		
<div class="card">
	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">All Clothing</h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_1" style="">
			<div class="card-body">
				
				<ul class="list-menu">
				<li><a href="outerwear.php">Jackets</a></li>
				<li><a href="pants.php">Pants</a></li>
				<li><a href="tops.php">Tops</a></li>
				<li><a href="#">Backpack</a></li>
				<li><a href="#">Pocketable Pouch </a></li>
				<li><a href="#">Towels</a></li>
					
				</ul>

			</div> <!-- card-body.// -->
		</div>
	</article> <!-- filter-group  .// -->
	
	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">Gender</h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_1" style="">
			<div class="card-body">
				
				<ul class="list-menu">
				<li><a href="women.php">Women</a></li>
				<li><a href="men.php">Men</a></li>
					
				</ul>

			</div> <!-- card-body.// -->
		</div>
	</article> <!-- filter-group  .// -->
	
	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">Sizes </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_4" style="">
			<div class="card-body">
			  <label class="checkbox-btn">
			    <input type="checkbox">
			    <span class="btn btn-light"> XS </span>
			  </label>

			  <label class="checkbox-btn">
			    <input type="checkbox">
			    <span class="btn btn-light"> S </span>
			  </label>

			  <label class="checkbox-btn">
			    <input type="checkbox">
			    <span class="btn btn-light"> M </span>
			  </label>

			  <label class="checkbox-btn">
			    <input type="checkbox">
			    <span class="btn btn-light"> L </span>
			  </label>
				
			<label class="checkbox-btn">
			    <input type="checkbox">
			    <span class="btn btn-light"> XL </span>
			  </label>
				
		</div><!-- card-body.// -->
		</div>
	</article> <!-- filter-group .// -->
	
	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">Price range </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_3" style="">
			<div class="card-body">
				
				<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Min</label>
				  <!-- <input class="form-control" placeholder="$0" type="number"> -->
				  	<select class="mr-2 form-control">
						<option value="0">$0</option>
						<option value="50">$50</option>
						<option value="100">$100</option>
						<option value="150">$150</option>
						<option value="200">$200</option>
					</select>
				</div>
				<div class="form-group text-right col-md-6">
				  <label>Max</label>
				  	<select class="mr-2 form-control">
						<option value="50">$50</option>
						<option value="100">$100</option>
						<option value="150">$150</option>
						<option value="200">$200</option>
					</select>
				</div>
				</div> <!-- form-row.// -->
				<button class="btn btn-block btn-primary">Apply</button>
			</div><!-- card-body.// -->
		</div>
	</article> <!-- filter-group .// -->
	
</div> <!-- card.// -->

	</aside> <!-- col.// -->
	<main class="col-md-9">

<header class="border-bottom mb-4 pb-3">
		<div class="form-inline">
			<span class="mr-md-auto">7 Items</span>
			
		</div>
</header><!-- sect-heading -->

<div class="row">
	<div class="col-md-4">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				<img src="https://proxy.goorm.io//service/627cb777a68dee19b503934b_dfu3iToC2NGsKvRjr2u.run.goorm.io/9080//file/load/PANTS%203%20-%20model.png?path=d29ya3NwYWNlJTJGUENLRF8yJTJGaW1hZ2VzJTJGcHJvZHVjdHMlMkZQQU5UUyUyMDMlMjAtJTIwbW9kZWwucG5n&docker_id=dfu3iToC2NGsKvRjr2u&secure_session_id=HiEbh6FGR1v4tUGJcxAXRB3CK6PJ_aLk">
				
			</div> <!-- img-wrap.// -->
			<figcaption class="info-wrap">
				<div class="fix-height">
					<a href="./product-detail.php" class="title">Chino Pants</a>
					<div class="price-wrap mt-2">
						<span class="price">$55</span>
					</div> <!-- price-wrap.// -->
				</div>
				<a href="#" class="btn btn-block btn-primary">Add to cart </a>	
			</figcaption>
		</figure>
	</div> <!-- col.// -->
	
	<div class="col-md-4">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				
				<img src="images/products/PUFFER1model.png">
				
			</div> <!-- img-wrap.// -->
			<figcaption class="info-wrap">
				<div class="fix-height">
					<a href="./product-detail.php" class="title">Long Puffer Jacket</a>
					<div class="price-wrap mt-2">
						<span class="price">$150</span>
						<del class="price-old">$1980</del>
					</div> <!-- price-wrap.// -->
				</div>
				<a href="#" class="btn btn-block btn-success">Added to cart </a>
			</figcaption>
		</figure>
	</div> <!-- col.// -->



	<div class="col-md-4">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				<img src="https://proxy.goorm.io//service/627cb777a68dee19b503934b_dfu3iToC2NGsKvRjr2u.run.goorm.io/9080//file/load/PANTS%205%20-%20model.png?path=d29ya3NwYWNlJTJGUENLRF8yJTJGaW1hZ2VzJTJGcHJvZHVjdHMlMkZQQU5UUyUyMDUlMjAtJTIwbW9kZWwucG5n&docker_id=dfu3iToC2NGsKvRjr2u&secure_session_id=HiEbh6FGR1v4tUGJcxAXRB3CK6PJ_aLk">
				
			</div> <!-- img-wrap.// -->
			<figcaption class="info-wrap">
				<div class="fix-height">
					<a href="./product-detail.php" class="title">Slim Ankle Pants</a>
					<div class="price-wrap mt-2">
						<span class="price">$55</span>
					</div> <!-- price-wrap.// -->
				</div>
				<a href="#" class="btn btn-block btn-primary">Add to cart </a>	
			</figcaption>
		</figure>
	</div> <!-- col.// -->
	
	<div class="col-md-4">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				<img src="images/products/WINDBREAKER3model.png">
				
			</div> <!-- img-wrap.// -->
			<figcaption class="info-wrap">
				<div class="fix-height">
					<a href="./product-detail.php" class="title">Matte Windbreaker</a>
					<div class="price-wrap mt-2">
						<span class="price">$120</span>
					</div> <!-- price-wrap.// -->
				</div>
				<a href="#" class="btn btn-block btn-primary">Add to cart </a>	
			</figcaption>
		</figure>
	</div> <!-- col.// -->

	<div class="col-md-4">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				<img src="images/products/TSHIRT1-model.png">
				
			</div> <!-- img-wrap.// -->
			<figcaption class="info-wrap">
				<div class="fix-height">
					<a href="./product-detail.php" class="title">PCKD. T-Shirt - Black</a>
					<div class="price-wrap mt-2">
						<span class="price">$30</span>
					</div> <!-- price-wrap.// -->
				</div>
				<a href="#" class="btn btn-block btn-primary">Add to cart </a>	
			</figcaption>
		</figure>
	</div> <!-- col.// -->

	<div class="col-md-4">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				<img src="images/products/TSHIRT4-model.png">
				
			</div> <!-- img-wrap.// -->
			<figcaption class="info-wrap">
				<div class="fix-height">
					<a href="./product-detail.php" class="title">WOMEN T-shirt</a>
					<div class="price-wrap mt-2">
						<span class="price">$30</span>
					</div> <!-- price-wrap.// -->
				</div>
				<a href="#" class="btn btn-block btn-primary">Add to cart </a>	
			</figcaption>
		</figure>
	</div> <!-- col.// -->

	<div class="col-md-4">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				<img src="images/products/TSHIRT5-model.png">
				
			</div> <!-- img-wrap.// -->
			<figcaption class="info-wrap">
				<div class="fix-height">
					<a href="./product-detail.php" class="title">Round Neck Long Sleeves</a>
					<div class="price-wrap mt-2">
						<span class="price">$40</span>
					</div> <!-- price-wrap.// -->
				</div>
				<a href="cart.php" class="btn btn-block btn-primary">Add to cart </a>	
			</figcaption>
		</figure>
	</div> <!-- col.// -->
	
	
</div> <!-- row end.// -->


<nav class="mt-4" aria-label="Page navigation sample">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>



	</main> <!-- col.// -->

</div>

</div> <!-- container .//  -->
</section>
<!-- ========================= SECTION CONTENT END// ========================= -->


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