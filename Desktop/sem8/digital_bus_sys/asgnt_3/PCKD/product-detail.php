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
function showAlert() {
	document.getElementById("added_alert").classList.add('show')
}
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
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-628c7efc7b2db2bb"></script>

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

<div class="alert alert-success alert-dismissible fade" id="added_alert" role="alert">
  <strong>Successfully added to shopping cart!</strong> Click shopping cart icon to find out more.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<section class="section-content padding-y bg section">
<div class="container product">

<!-- ============================ COMPONENT 1 ================================= -->
<div class="card simpleCart_shelfItem">
	<div class="row no-gutters">
		<aside class="col">
<article class="gallery-wrap"> 
	<div class="img-big-wrap">
	   <a href="#"><img src="./images/products/TSHIRT3-model.png"></a>
	</div> <!-- img-big-wrap.// -->
	
</article> <!-- gallery-wrap .end// -->
		</aside>
		<main class="col border-left">
<article class="content-body">

<h2 class="item_name">3/4 Long Sleeve</h2>

<div class="mb-3"> 
	<var class="item_price h4">$35.00</var> 
</div> 

<p>PCKD's compact, lightweight and thin 3/4 arm length long sleeve, boasts the need for warmth in a casual environment without the need for a full length long sleeve. It is breathable and also foldable into a small pouch for ease of travel and space saving.</p>


<hr>
	<div class="row">
		<div class="item-option-select">
			<h6>Quantity</h6>
			<div class="input-group mb-3 w-50">
				<span class="input-group-text">-</span>
				<input type="text" class="form-control item_Quantity text-center" value="1">
				<span class="input-group-text">+</span>
			</div>
		</div>
	</div> <!-- row.// -->
	<div class="row">
		<div class="item-option-select">
			<h6>Select Size</h6>
			<select class="item_size form-control">
				<option selected value="small" name='select_size'>S</option>
				<option value="medium" name='select_size'>M</option>
				<option value="large" name='select_size'>L</option>
				<option value="extraLarge" name='select_size'>XL</option>
			</select>
		</div>
	</div> <!-- row.// -->
	<hr>
	<div class="row">
		<div class="item-option-select">
			<h6>Customize Color</h6>
			<input type="color" class="circle" value="#3B7DB0">
		</div>
	</div> <!-- row.// -->
	<hr>
	<a href="javascript:;" class="btn  btn-primary item_add" onclick="showAlert()"> <span class="text">Add to cart</span> <i class="fas fa-shopping-cart"></i>  </a>
</article> <!-- product-info-aside .// -->
		</main> <!-- col.// -->
	</div> <!-- row.// -->
</div> <!-- card.// -->
<!-- ============================ COMPONENT 1 END .// ================================= -->

<br>

<div class="row">
			<div class="col-md-9">

	<header class="section-heading">
		<h3>Customer Reviews </h3>  
		
	</header>

	<article class="box mb-3">
		<div class="icontext w-100">
			<img src="./images/avatars/AVATAR1.png" class="img-xs icon rounded-circle">
			<div class="text">
				<span class="date text-muted float-md-right">24.04.2022 </span>  
				<h6 class="mb-1">Rachel Mary </h6>
				
			</div>
		</div> <!-- icontext.// -->
		<div class="mt-3">
			<p>
				Fantastic Long Sleeve, i wear it all the time as it feels lightweight, yet comfortable and it is so much more convenient when i can pack into my backpack but takes up the space of wallet. Highly Recommend!
			</p>	
		</div>
	</article>

	

	</div> <!-- col.// -->
</div> <!-- row.// -->


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

<!-- Color palette -->
<!-- Copyright (c) 2022 by MaltEX (https://codepen.io/galinhalx/pen/gOvwdWg)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 -->