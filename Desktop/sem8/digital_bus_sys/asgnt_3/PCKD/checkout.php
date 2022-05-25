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
			    <input required type="text" class="form-control" style="width:60%;" placeholder="Search by item keyword">
			    
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

	
<section class="section-content padding-y bg">
<div class="container">



<!-- ============================ COMPONENT 2 ================================= -->
<div class="row">
		<main class="col-md-8">

<article class="card mb-4">
<div class="card-body">
	<h4 class="card-title mb-4">Review cart</h4>
	<!-- Display all items in shopping cart -->
    <div class="simpleCart_items"></div>
</div> <!-- card-body.// -->
</article> <!-- card.// -->


<article class="card mb-4">
<div class="card-body">
	<h4 class="card-title mb-4">Contact info</h4>
	<form action="">
		<div class="row">
			<div class="form-group col-sm-6">
                <label for="fname">First Name</label><br />
                <input required type="text" name="firstname" id="fname"  class="form-control"/><br />
			</div>
			<div class="form-group col-sm-6">
                <label for="lname">Last Name</label><br />
                <input required type="text" name="lastname" id="lname" class="form-control"/><br />
			</div>
			<div class="form-group col-sm-6">
            <label for="phone_number">Phone Number</label><br />
                <input required type="text" name="phone" value="+61" id="phone_number" class="form-control"/><br />
			</div>
			<div class="form-group col-sm-6">
				<label>Email</label>
				<input required type="email" placeholder="example@gmail.com" id="email_address" class="form-control">
			</div>
		</div> <!-- row.// -->	
	</form>
</div> <!-- card-body.// -->
</article> <!-- card.// -->


<article class="card mb-4">
<div class="card-body">
	<h4 class="card-title mb-4">Delivery info</h4>
	<form action="">
			

		<div class="row">
				<div class="form-group col-sm-6">
                    <label for="country">Country*</label><br />
					<select name="country" id="country" class="form-control">
						<option value="" selected>Australia</option>
						<option value="">South Korea</option>
					</select>
				</div>
				<div class="form-group col-sm-6">
                    <label for="address_city">City</label><br />
                    <input required type="text" name="city" id="address_city"class="form-control"/><br />
				</div>
				<div class="form-group col-sm-8">
                    <label for="address_street_1">Street Address*</label><br />
                    <input required type="text" name="street1" id="address_street_1" class="form-control"/><br />
				</div>
				<div class="form-group col-sm-4">
                    <label for="address_street_2">Street Address Line 2</label><br />
                    <input required type="text" name="street2" id="address_street_2" class="form-control"/><br />
				</div>
				<div class="form-group col-sm-4">
                    <label for="address_state_province">State/Province</label><br />
                    <input required type="text" name="state_province" id="address_state_province" class="form-control"/><br />
				</div>
				<div class="form-group col-sm-4">
                    <label for="postal_code">Postal/Zip Code</label><br />
                    <input required type="text" name="postcode" id="postal_code" class="form-control"/><br />
				</div>
		</div> <!-- row.// -->	
	</form>
</div> <!-- card-body.// -->
</article> <!-- card.// -->


<article class="accordion" id="accordion_pay">
	<div class="card">
		<header class="card-header">
			<img src="./images/misc/payment-paypal.png" class="float-right" height="24"> 
			<label class="form-check collapsed" data-toggle="collapse" data-target="#pay_paynet">
				<input required class="form-check-input" checked type="radio" id="cc_paypal" name="cc_type" value="paypal">
				<h6 class="form-check-label"> 
					Paypal 
				</h6>
			</label>
		</header>
		<div id="pay_paynet" class="collapse show" data-parent="#accordion_pay">
		<div class="card-body">
			<p class="text-center text-muted">Connect your PayPal account and use it to pay your bills. You'll be redirected to PayPal to add your billing information.</p>
			<p class="text-center">
				<a href="#"><img src="./images/misc/btn-paypal.png" height="32"></a>
				<br><br>
			</p>
		</div> <!-- card body .// -->
		</div> <!-- collapse .// -->
	</div> <!-- card.// -->
	<div class="card">
	<header class="card-header">
		<img src="./images/misc/payment-card.png" class="float-right" height="24">  
		<label class="form-check" data-toggle="collapse" data-target="#pay_payme">
			<input required class="form-check-input" type="radio" id="cc_mastercard" name="cc_type" value="mastercard">
			<h6 class="form-check-label"> Mastercard  </h6>
		</label>
	</header>
	<header class="card-header">
		<img src="./images/misc/payment-card.png" class="float-right" height="24">  
		<label class="form-check" data-toggle="collapse" data-target="#pay_payme">
			<input required class="form-check-input" type="radio"id="cc_visa" name="cc_type" value="visa">
			<h6 class="form-check-label"> Visa  </h6>
		</label>
	</header>
	<header class="card-header">
		<img src="./images/misc/payment-card.png" class="float-right" height="24">  
		<label class="form-check" data-toggle="collapse" data-target="#pay_payme">
			<input required class="form-check-input" type="radio" id="cc_amex" name="cc_type" value="amex">
			<h6 class="form-check-label"> American Express  </h6>
		</label>
	</header>
	<div id="pay_payme" class="collapse" data-parent="#accordion_pay">
		<div class="card-body">
			<p class="alert alert-success">Some information or instruction</p>
			<form class="form-inline">
                <input required type="text" class="form-control mr-2" style="width: 100px"  placeholder="Name on Card" name="ccname" id="credit_card_name">
				<input required type="text" class="form-control mr-2" placeholder="xxxx-xxxx-xxxx-xxxx" name="ccnumber" id="credit_card_number">
				<input required type="number" maxlength="3" class="form-control mr-2"  style="width: 100px"  placeholder="cvc" name="ccsecuritycode" id="credit_card_security_code">
			</form>
		</div> <!-- card body .// -->
	</div> <!-- collapse .// -->
	</div> <!-- card.// -->
</article> 
<!-- accordion end.// -->
  
		</main> <!-- col.// -->
		<aside class="col-md-4">
		<div class="card">
		<div class="card-body">
			<dl class="dlist-align">
			  <dt>Sub-Total:</dt>
			  <dd class="text-right"><div class="simpleCart_total"></div></dd>
			</dl>
			<dl class="dlist-align">
			  <dt>GST (<span class="simpleCart_taxRate"></span>%):</dt>
			  <dd class="text-right"><span class="simpleCart_tax"></span></dd>
			</dl>
			<dl class="dlist-align">
			  <dt>Delivery fee:</dt>
			  <dd class="text-right"><span class="simpleCart_shipping"></span></dd>
			</dl>
			<dl class="dlist-align">
			  <dt>Grand-Total:</dt>
			  <dd class="text-right text-dark b"><strong><span class="simpleCart_grandTotal"></span></strong></dd>
			</dl>
			<hr>
			<p class="text-center mb-3">
				<img src="./images/misc/payments.png" height="26">
			</p>
			<a href="javascript:; simpleCart.empty();" class="simpleCart_checkout btn btn-primary btn-block"> Make Payment </a>
			<a href="./store.php" class="btn btn-light btn-block">Continue Shopping</a>
			<!-- 	Clear cart	 -->
		</div> <!-- card-body.// -->
		</div> <!-- card.// -->
		</aside> <!-- col.// -->
	</div> <!-- row.// -->

<!-- ============================ COMPONENT 2 END//  ================================= -->




</div> <!-- container .//  -->
</section>
<!-- ========================= SECTION CONTENT END// ========================= -->


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