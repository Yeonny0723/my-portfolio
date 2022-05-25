<?php session_start(); ?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="max-age=604800" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

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
				<a class="dropdown-item" href="clothing.php">Clothing</a>
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



<!-- ========================= SECTION CONTENT ========================= -->
<section class="section-conten padding-y bg">

<div class="container">
	<div class="row">
	<aside class="col-md-3">
		<!--   SIDEBAR   -->
		<ul class="list-group">
			<a class="list-group-item active" href="#"> My order history </a>
			<a class="list-group-item" href="#"> Transactions </a>
			<a class="list-group-item" href="#"> Return and refunds </a>
			<a class="list-group-item" href="#">Settings </a>
			<a class="list-group-item" href="#"> My Selling Items </a>
			<a class="list-group-item" href="#"> Received orders </a>
		</ul>
		<br>
		<?php
		echo '
		<a class="btn btn-light btn-block" href="./logout.php"> <i class="fa fa-power-off"></i> <span class="text">Log out</span> </a> 
		';
		?>
		<!--   SIDEBAR .//END   -->
	</aside>
	<main class="col-md-9">
		<article class="card">
		<header class="card-header">
			<strong class="d-inline-block mr-3">My Order History</strong>
		</header>
		<div class="card-body">
			<h6 class="w-100 text-center">
				No purchase history found
			</h6>
		</div> <!-- card-body .// -->
		<div class="table-responsive">
		<table class="table table-hover">
		</table>
		</div> <!-- table-responsive .end// -->
		</article> <!-- order-group.// --> 
	</main>
</div> <!-- row.// -->
</div>


</section>
<!-- ========================= SECTION CONTENT END// ========================= -->


<!-- ========================= FOOTER ========================= -->
<footer class="section-footer border-top padding-y">
	<div class="container">
		<p class="float-md-right"> 
			&copy Copyright 2019 All rights reserved
		</p>
		<p>
			<a href="#">Terms and conditions</a>
		</p>
	</div><!-- //container -->
</footer>
<!-- ========================= FOOTER END // ========================= -->



</body>
</html>
