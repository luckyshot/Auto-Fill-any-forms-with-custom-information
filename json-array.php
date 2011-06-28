<?php
/**
 *	Auto Fill any forms with custom information
 *	Greasemonkey UserScript
 *	by Xavi Esteve ( http://xaviesteve.com/ )
 *	Version 2.0
 *	Last updated: 29 June 2011
 *
 *	--- JSON initial array ---
 *	This file helps generate the JSON array for the JS file
 *
 */
$autofill = array(
	/* This one is used as a wildcard (if you want undetected fields to fill with something) */
	"other" => array(
		"value" => array(""),
		"name" => array(""),
	),
	/*  */
	"search" => array(
		"value" => array("q","search","s"),
		"name" => array(""),
	),
	/* Captcha */
	"captcha" => array(
		"value" => array(""),
		"name" => array("captcha","verif","response","cword","turing","image","security","token","code"),),
	/* Dates */
	"year" => array(
		"value" => array("1986"),
		"name" => array("year","yy","birth"),
	),
	"month" => array(
		"value" => array("7"),
		"name" => array("month","mm"),
	),
	"day" => array(
		"value" => array("23"),
		"name" => array("day","dd"),
	),
	"age" => array(
		"value" => array("21"),
		"name" => array("age"),
	),
	/* Personal */
	"title" => array(
		"value" => array("Dr"),
	"name" => array("title"),
	),
	"initial" => array(
		"value" => array("GW"),
		"name" => array("initial"),
	),
	"username" => array(
		"value" => array("garoldwalker"),
		"name" => array("user","display","login","nick","id","member","account","name"),
	),
	"firstname" => array(
		"value" => array("Garold"),
		"name" => array("first","real"),
	),
	"middlename" => array(
		"value" => array(""),
		"name" => array("middle"),
	),
	"lastname" => array(
		"value" => array("Walker"),
		"name" => array("last","surname"),
	),
	"fullname" => array(
		"value" => array("Garold Walker"),
		"name" => array("fullname","full_name"),
	),
	/* Accounts */
	"question" => array(
		"value" => array("Who is the best bugger?"),
		"name" => array("name1"),
	),
	"email" => array(
		"value" => array("garoldwalker@mailinator.com"),
		"name" => array("mail","from"),
	),
	"msn" => array(
		"value" => array("garoldwalker@hotmail.com"),
	"name" => array("msn"),
	),
	"icq" => array(
		"value" => array("45592738"),
		"name" => array("icq"),
	),
	"twitter" => array(
		"value" => array("garoldwalker"),
		"name" => array("tw"),
	),
	"facebook" => array(
		"value" => array("Garold-Walker"),
		"name" => array("facebook","fbook","fb"),
	),
	/* Phone */
	"phone" => array(
		"value" => array("5139726287"),
		"name" => array("phone","contactno","mob","cell"),
	),
	"phone1" => array(
		"value" => array("513"),
		"name" => array("phone1"),
	),
	"phone2" => array(
		"value" => array("9726"),
		"name" => array("phone2"),
	),
	"phone3" => array(
		"value" => array("287"),
		"name" => array("phone3"),
	),
	"fax" => array(
		"value" => array("5139726289"),
		"name" => array("fax"),
	),
	/* Address */
	"address" => array(
		"value" => array("Dayton, OH 45401"),
		"name" => array("address"),
	),
	"address2" => array(
		"value" => array(""),
		"name" => array("address2"),
	),
	"address3" => array(
		"value" => array(""),
		"name" => array("address3"),
	),
	"address4" => array(
		"value" => array(""),
		"name" => array("address4"),
	),
	"city" => array(
	"value" => array("Dayton"),
	"name" => array("city","town"),
	),
	"area" => array(
	"value" => array("51"),
	"name" => array("area"),
	),
	"state" => array(
	"value" => array("OH"),
	"name" => array("state"),
	),
	"country" => array(
	"value" => array("United States"),
	"name" => array("country","location"),
	),
	"zip" => array(
	"value" => array("val1"),
	"45401" => array("zip","postal","district"),
	),
	"timezone" => array(
	"value" => array("London"),
	"name" => array("timezoneoffset"),
	),
	/* Work */
	"company" => array(
	"value" => array("Feel Good Inc."),
	"name" => array("company","organization","organisation"),
	),
	"position" => array(
	"value" => array("Head of Digital"),
	"name" => array("position","occup"),
	),
	/* Personal info */
	"identity" => array(
	"value" => array("382014940"),
	"name" => array("ident"),
	),
	"creditcard" => array(
	"value" => array("4929391046267988"),
	"name" => array("credit","card"),
	),
	"ccexpirymonth" => array(
	"value" => array("02"),
	"name" => array("exp"),
	),
	"ccexpiryyear" => array(
	"value" => array("13"),
	"name" => array("expyear"),
	),
	"hobbie" => array(
	"value" => array("I love to dance!"),
	"name" => array("interest","hobbie"),
	),
	"web" => array(
	"value" => array("http://xaviesteve.com/"),
	"name" => array("web"),
	),
	"referrer" => array(
	"value" => array(""),
	"name" => array("ref"),
	),
	"answer" => array(
	"value" => array("bugmenot"),
	"name" => array("answer"),
	),
	"password" => array(
	"value" => array("buggybuggy"),
	"name" => array("pass","pw","retype","confirm","verify"),
	),
);

echo json_encode($autofill);
