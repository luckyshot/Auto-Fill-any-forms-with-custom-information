// ==UserScript==
// @name           Auto Fill any forms with custom information
// @author         Xavi Esteve
// @namespace      http://xaviesteve.com
// @description    Autofill and complete online web formularies with your custom data
// @version        1.6.2
// @include        http*://*
// @license        Creative Commons Attributive Share-Alike 3.0
// ==/UserScript==

// FUNCTIONS  

GM_registerMenuCommand("Auto-fill - AutoComplete",
  function()
    {
      var inputtexts = new Array(
      new Array (GM_getValue('af_ot',''),""), /* This one is used as a wildcard (if you want undetected fields to fill with something) */
      new Array (GM_getValue('af_ca',''),																"captcha","verif","response","cword","turing","image","security","token","code"), /* captcha code */
			
      new Array (GM_getValue('af_ye','1976'),														"year","yy","birth"), /* year of birth */
      new Array (GM_getValue('af_mo','7'),															"month","mm"), /* month of birth */
      new Array (GM_getValue('af_da','21'),															"day","dd"), /* day of birth */
      new Array (2008 - GM_getValue('af_ye','1976'),										"age"), /* age */
			
      new Array (GM_getValue('af_ti','Dr.'),														"title"), /* title */
      new Array (GM_getValue('af_in','GW'),															"initial"), /* initials */
      new Array (GM_getValue('af_nn','bugmenot'),												"user","display","login","nick","id","member","account","name"), /* username */
      new Array (GM_getValue('af_fn','Garold'),													"first","real"), /* first name */
      new Array (GM_getValue('af_ln','Walker'),													"last","surname"), /* last name */
      new Array (GM_getValue('af_fn','Garold')+" "+GM_getValue('af_ln','Walker'),"fullname","full_name","auth"), /* first and last name */
      new Array (GM_getValue('af_qu','Who is the best bugger?'),"question"), /* security question */
			
      new Array (GM_getValue('af_ph','(513) 972-6287'),									"phone","contactno","mobile","cell"), /* phone number */
      new Array (GM_getValue('af_ph1','513'),														"phone1"), /* phone number part 1 */
      new Array (GM_getValue('af_ph2','972'),														"phone2"), /* phone number part 2 */
      new Array (GM_getValue('af_ph3','6287'),													"phone3","ext"), /* phone number part 3 */
      new Array (GM_getValue('af_fa','(513) 972-6287'),									"fax"), /* fax number */
      new Array (GM_getValue('af_ad','4960 Brandy Run'),								"address"), /* address */
      new Array (GM_getValue('af_ad2','Dayton, OH 45401'),							"address2"), /* address 2 */
      new Array (GM_getValue('af_ad3',''),															"address3"), /* address 3 */
      new Array (GM_getValue('af_ad4',''),															"address4"), /* address 4 */
      new Array (GM_getValue('af_ad5',''),															"address5"), /* address 5 */
      new Array (GM_getValue('af_ci','Dayton'),													"city","town"), /* city */
      new Array (GM_getValue('af_ar','51'),															"area"), /* area */
      new Array (GM_getValue('af_st','OH'),															"state"), /* state */
      new Array (GM_getValue('af_ct','United States'),									"country","location"), /* country */
      new Array (GM_getValue('af_zi','45401'),													"zip","postal","district"), /* zip code */
      new Array (GM_getValue('af_tz','0'),															"timezoneoffset"), /* timezone offset */
      new Array (GM_getValue('af_em','garoldwalker@mailinator.com'),		"mail","from"), /* email */
      new Array (GM_getValue('af_ms','garoldwalker@hotmail.com'),				"msn"), /* msn */
      new Array (GM_getValue('af_ic','45592738'),												"icq"), /* icq */
			
      new Array (GM_getValue('af_co','Feel Good, Inc.'),								"company","organization","organisation"), /* company */
      new Array (GM_getValue('af_po','CEO'),														"position","occup"), /* position */

      new Array (GM_getValue('af_id','382014940'),											"ident"), /* id number */
      new Array (GM_getValue('af_cc','1111222233334444'),								"credit","card"), /* credit card */

      new Array (GM_getValue('af_ho','I love to dance!'),								"interest","hobbie","goal"), /* hobbies */
      new Array (GM_getValue('af_we','http://xaviesteve.com'),					"web","url"), /* website */
      new Array (GM_getValue('af_re','garoldwalker'),										"referrer"), /* referrer */
      new Array (GM_getValue('af_an','bugmenot'),												"answer") /* security answer */
      );
      
      /* Password */
      var inputpasswords = new Array(GM_getValue('af_ps','bugmenot'),		"pass","pw","retype","confirm","verify"); /* password */
      
      /* You can add or remove from these lists to check, uncheck or leave its default */
      var checkboxes = new Array (
      	new Array ("adminemail","showemail","receive","pm","news","mail","update","spam","send","offer","agent","press","list"), /* uncheck these boxes */
      	new Array ("rules","tos","terms","coppa","agree","accept","save","remember","age","legal","confirm","token","over") /*  check these boxes */
      );


      // INPUT
       var textElements = document.getElementsByTagName('input');
       for (var i=0;i<textElements.length;i++) {
       // INPUT type TEXT
         if (textElements[i].type == 'text') {
           for (var j=0; j<inputtexts.length; j++){
             for (var k=1; k<inputtexts[j].length; k++){
               var lowerit = textElements[i].name.toLowerCase();
               if (lowerit.search(inputtexts[j][k])>=0) {
                 textElements[i].value = inputtexts[j][0];
               }
             }
           }
         }
       // INPUT type PASSWORD
         if (textElements[i].type == 'password') {
           for (var k=1; k<inputpasswords.length; k++){
             var lowerit = textElements[i].name.toLowerCase();
             if (lowerit.search(inputpasswords[k])>=0) {
               textElements[i].value = inputpasswords[0];
             }
           }
         }
       // INPUT type CHECKBOX
         if (textElements[i].type == 'checkbox') {
           for(var j=1;j<checkboxes[0].length;j++){var lowerit=textElements[i].name.toLowerCase();if(lowerit.search(checkboxes[0][j])>=0){textElements[i].checked=false;}}
           for(var j=1;j<checkboxes[1].length;j++){var lowerit=textElements[i].name.toLowerCase();if(lowerit.search(checkboxes[1][j])>=0){textElements[i].checked=true;}}
         }
       // INPUT type RADIO
       /* Selects the last one */
         if (textElements[i].type == 'radio') {textElements[i].checked=true;}
       }
      
       // SELECT
       /* Selects the middle one */
       var selects = document.getElementsByTagName('select');
       for (var i=0;i<selects.length;i++) {
         var whattoselect = (selects[i].length/2)-((selects[i].length%2)/2);
         selects[i].options[whattoselect].selected=true;
       }
       
       // Is there any Captcha?
       for (var i=0;i<textElements.length;i++) {
       // INPUT type TEXT
         if (textElements[i].type == 'text') {
           for (var k=1; k<inputtexts[1].length; k++){
             var lowerit = textElements[i].name.toLowerCase();
             if (lowerit.search(inputtexts[1][k])>=0) {
               textElements[i].focus();
             }
           }
         }
      }
   }
);
function createMenu(){
	
      // Insert DIV style
      var styleCode = "#autofill *,#autofill{color:#000;background:#fff;font-size:11px;text-align:left;font-family:Arial,sans-serif;margin:0;padding:0;}#autofill{z-index:999;min-width:300px;border:5px solid #999;position:absolute;top:10px;right:10px;moz-border-radius:5px;padding:10px;}#autofill label{display:block;float:left;width:33%;margin-left:1em;}#autofill p{color:#000;margin:10px;}#autofill p strong{font-size:14px;}#autofill p small{display:block;color:#ccc;font-size:8px;margin-left:10px;text-align:right;}#autofill h2 a{color:#0085d5;font-size:16px;margin:20px;}#autofill .submit input{margin-left:20px;background:#fff;border:none;color:#0085d5;}#autofill input{background:#f1f1f1;border:1px solid #ccc;padding:4px;}";

      var style = document.createElement('style');
      style.innerHTML = styleCode;
      
      try { document.getElementsByTagName('head')[0].appendChild(style); }
      catch(e) { console.debug(e)}
      
      // Draw DIV 
      var guiCode = '<div id="autofill"><h2><a href="http://userscripts.org/scripts/show/39313" target="_blank" title="Click to visit AutoFill site">AutoFill Forms Script</a></h2><p><strong>Personal</strong></p><p><label>Nick name:</label><input type="text" value="'+GM_getValue('af_nn','bugmenot')+'" id="af_nn" /></p><p><label>First name:</label><input type="text" value="'+GM_getValue('af_fn','Garold')+'" id="af_fn" /></p><p><label>Last name:</label><input type="text" value="'+GM_getValue('af_ln','Walker')+'" id="af_ln" /></p><p><label>Initials:</label><input type="text" value="'+GM_getValue('af_in','GW')+'" id="af_in" /></p><p><label>Password:</label><input type="password" value="'+GM_getValue('af_ps','bugmenot')+'" id="af_ps" /><small>Default: bugmenot</small></p><p><label>ID:</label><input type="text" value="'+GM_getValue('af_in','382014940')+'" id="af_id" /></p><p class="submit"><input type="button" value="Save changes" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" name="savechanges" id="savechanges" /><input type="button" value="Cancel" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" /></p><p><strong>Professional</strong></p><p><label>Title:</label><input type="text" value="'+GM_getValue('af_ti','Dr.')+'" id="af_ti" /></p><p><label>Position:</label><input type="text" value="'+GM_getValue('af_po','CEO')+'" id="af_po" /></p><p><label>Company:</label><input type="text" value="'+GM_getValue('af_co','Feel Good, Inc.')+'" id="af_co" /></p><p class="submit"><input type="button" value="Save changes" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" name="savechanges" id="savechanges" /><input type="button" value="Cancel" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" /></p><p><strong>Birth</strong></p><p><label>Day:</label><input type="text" value="'+GM_getValue('af_da','21')+'" id="af_da" /></p><p><label>Month:</label><input type="text" value="'+GM_getValue('af_mo','7')+'" id="af_mo" /></p><p><label>Year:</label><input type="text" value="'+GM_getValue('af_ye','1976')+'" id="af_ye" /></p><p><label>Secret question:</label><input type="text" value="'+GM_getValue('af_qu','Who is the best bugger?')+'" id="af_qu" /></p><p><label>Secret answer:</label><input type="password" value="'+GM_getValue('af_an','bugmenot')+'" id="af_an" /><small>Default: bugmenot</small></p><p class="submit"><input type="button" value="Save changes" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" name="savechanges" id="savechanges" /><input type="button" value="Cancel" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" /></p><p><strong>Contact</strong></p><p><label>E-mail:</label><input type="text" value="'+GM_getValue('af_em','garoldwalker@mailinator.com')+'" id="af_em" /></p><p><label>MSN:</label><input type="text" value="'+GM_getValue('af_ms','garoldwalker@hotmail.com')+'" id="af_ms" /></p><p><label>ICQ:</label><input type="text" value="'+GM_getValue('af_ic','45592738')+'" id="af_ic" /></p><p><label>Phone:</label><input type="text" value="'+GM_getValue('af_ph','(513) 972-6287')+'" id="af_ph" /></p><p><label>Phone 1:</label><input type="text" value="'+GM_getValue('af_ph1','513')+'" id="af_ph1" /></p><p><label>Phone 2:</label><input type="text" value="'+GM_getValue('af_ph2','972')+'" id="af_ph2" /></p><p><label>Phone 3:</label><input type="text" value="'+GM_getValue('af_ph3','6287')+'" id="af_ph3" /></p><p><label>Fax:</label><input type="text" value="'+GM_getValue('af_fa','(513) 972-6287')+'" id="af_fa" /></p><p class="submit"><input type="button" value="Save changes" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" name="savechanges" id="savechanges" /><input type="button" value="Cancel" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" /></p><p><strong>Location</strong></p><p><label>Address 1:</label><input type="text" value="'+GM_getValue('af_ad','4960 Brandy Run')+'" id="af_ad" /></p><p><label>Address 2:</label><input type="text" value="'+GM_getValue('af_ad2','Dayton, OH 45401')+'" id="af_ad2" /></p><p><label>Address 3:</label><input type="text" value="'+GM_getValue('af_ad3','')+'" id="af_ad3" /></p><p><label>Address 4:</label><input type="text" value="'+GM_getValue('af_ad4','')+'" id="af_ad4" /></p><p><label>Address 5:</label><input type="text" value="'+GM_getValue('af_ad5','')+'" id="af_ad5" /></p><p><label>City:</label><input type="text" value="'+GM_getValue('af_ci','Dayton')+'" id="af_ci" /></p><p><label>Area:</label><input type="text" value="'+GM_getValue('af_ar','51')+'" id="af_ar" /></p><p><label>State:</label><input type="text" value="'+GM_getValue('af_st','OH')+'" id="af_st" /></p><p><label>Country:</label><input type="text" value="'+GM_getValue('af_ct','United States')+'" id="af_ct" /></p><p><label>Zip code:</label><input type="text" value="'+GM_getValue('af_zi','45401')+'" id="af_zi" /></p><p class="submit"><input type="button" value="Save changes" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" name="savechanges" id="savechanges" /><input type="button" value="Cancel" onclick="document.getElementById(\'autofill\').style.display=\'none\';return false" /></p><p><strong>Others</strong></p><p><label>Interests:</label><input type="text" value="'+GM_getValue('af_ho','dance!')+'" id="af_ho" /></p><p><label>Website:</label><input type="text" value="'+GM_getValue('af_we','http://xaviesteve.com')+'" id="af_we" /></p><p><label>Referrer:</label><input type="text" value="'+GM_getValue('af_re','xaviesteve')+'" id="af_re" /></p><p><label>Time Zone Offset:</label><input type="text" value="'+GM_getValue('af_tz','0')+'" id="af_tz" /></p><p><label>Credit Card:</label><input type="text" value="'+GM_getValue('af_cc','1111222233334444')+'" id="af_cc" /></p><p><label>Captcha:</label><input type="text" value="'+GM_getValue('af_ca','')+'" id="af_ca" /></p><p><label>Any other field:</label><input type="text" value="'+GM_getValue('af_ot','')+'" id="af_ot" /></p></div>';
      
      // Insert DIV
      var gui = document.createElement('div');
      gui.id = 'autofilloptions';
      gui.innerHTML = guiCode;
      guiCode.length = 0;
      document.body.insertBefore(gui, document.body.lastChild);
      
      // Add event SAVE
      var sChanges=document.getElementsByName('savechanges');
      console.debug(sChanges);
      for (var z=0;z<sChanges.length;z++){
    	  sChanges[z].addEventListener('click', saveChanges , false);
      }
}
$nd = function (xpath, context, from)
{
	var nd = (from||document).evaluate(xpath, (context||document), null, 9, null).singleNodeValue;
	//if($type($el) == 'function'){ return $el(nd); }
	return nd;
};
function saveChanges(){
    GM_setValue('af_nn',document.getElementById('af_nn').value);
    GM_setValue('af_fn',document.getElementById('af_fn').value);
    GM_setValue('af_ln',document.getElementById('af_ln').value);
    GM_setValue('af_in',document.getElementById('af_in').value);
    GM_setValue('af_id',document.getElementById('af_id').value);
    GM_setValue('af_ps',document.getElementById('af_ps').value);
    GM_setValue('af_po',document.getElementById('af_po').value);
    GM_setValue('af_co',document.getElementById('af_co').value);
    GM_setValue('af_da',document.getElementById('af_da').value);
    GM_setValue('af_mo',document.getElementById('af_mo').value);
    GM_setValue('af_ye',document.getElementById('af_ye').value);
    GM_setValue('af_qu',document.getElementById('af_qu').value);
    GM_setValue('af_an',document.getElementById('af_an').value);
    GM_setValue('af_em',document.getElementById('af_em').value);
    GM_setValue('af_ms',document.getElementById('af_ms').value);
    GM_setValue('af_ic',document.getElementById('af_ic').value);
    GM_setValue('af_ph',document.getElementById('af_ph').value);
    GM_setValue('af_ph2',document.getElementById('af_ph2').value);
    GM_setValue('af_ph3',document.getElementById('af_ph3').value);
    GM_setValue('af_fa',document.getElementById('af_fa').value);
    GM_setValue('af_ad',document.getElementById('af_ad').value);
    GM_setValue('af_ad2',document.getElementById('af_ad2').value);
    GM_setValue('af_ad3',document.getElementById('af_ad3').value);
    GM_setValue('af_ad4',document.getElementById('af_ad4').value);
    GM_setValue('af_ad5',document.getElementById('af_ad5').value);
    GM_setValue('af_ci',document.getElementById('af_ci').value);
    GM_setValue('af_ar',document.getElementById('af_ar').value);
    GM_setValue('af_st',document.getElementById('af_st').value);
    GM_setValue('af_ct',document.getElementById('af_ct').value);
    GM_setValue('af_zi',document.getElementById('af_zi').value);
    GM_setValue('af_cc',document.getElementById('af_cc').value);
    GM_setValue('af_ho',document.getElementById('af_ho').value);
    GM_setValue('af_we',document.getElementById('af_we').value);
    GM_setValue('af_re',document.getElementById('af_re').value);
    GM_setValue('af_tz',document.getElementById('af_tz').value);
    GM_setValue('af_ca',document.getElementById('af_ca').value);
    GM_setValue('af_ot',document.getElementById('af_ot').value);
    }

function showMenu(){
 try{
	 document.getElementById('autofill').style.display='block';
 }catch(e){
	createMenu(); 
	console.debug(e);
  }
}
GM_registerMenuCommand("Auto-fill - Options", showMenu );