// Global Variables
let $activities = $('.activities');
let $validation = $('form');
let $confTotal = 0; // Will take in the cost of each conference class
let $numOfCheckmarks = 0; // this will be used to make sure at least one option is chosen.  for validation.

// == Full Stack Conf == Init function == Helps set up the page
$(document).ready(() => {  // waits till the HTML and CSS loads
    $initFocus = $('#name').focus(); // sets initial focus on the "Name:" input.
    $('form').attr('novalidate', true);  // turns off browser validation.  JS/jQuery will validate!
    $otherRole = $(".other-title").hide(); // initially hides the .other-title <div>.  choosing "other" will unhide this.  
    $('option[value="credit card"]').attr('selected', true);  // Sets the payment dropdown to the Credit card selection by default.
    $bitcoinSelector.hide();  // initialy hides the bitcoin payment <div>.
    $paypalSelector.hide();  //initially hides the paypal <div>
    $('#colors-js-puns').hide();
    // == EMAIL INIT == Adds a list below the email input.  As the user types, the form will watch to make use the items are included!
    let ul = document.createElement('ul');
    let li_1 = document.createElement('li');
    let li_2 = document.createElement('li');
    ul.className = 'email-list';
    li_1.textContent = 'Your email must contain one "@"';
    li_2.textContent = 'Your email must contain one period AFTER the ampersand';
    $('#mail:input').after(ul);
    ul.appendChild(li_1);
    li_1.after(li_2);
});
// EMAIL REAL-TIME validation
$('#mail:input').keyup(() => {
    let $emailCheck = $('#mail:input')[0].value;
    let $emailCheckSplit = $emailCheck.split("@");
    if($emailCheck.includes("@")) {    
        $('li:contains("@")').hide(500);
        
        if($emailCheckSplit[1].includes('.')) {
            $('li:contains("period")').hide(500);
        };
    };
    if(!$emailCheck.includes("@")) {    
        $('li:contains("@")').show(500);
        $('li:contains("period")').show(500);
    };
    if(!$emailCheckSplit[1].includes('.')) {
        $('li:contains("period")').show(500);  
    };
});

// Job Role conditional.  show()'s the ".other-title" section when "Other" is chosen.
$("#title").change(() => {
    if (title.value == 'other') { //if the selection equals 'other', show() the .other-title option.  else, do nothing.
        $(".other-title").show(500);  // half a second to show the .other-section
        $("#other-title").focus();  // once the button is shown, it will move focus to the "other" text input.
    } else {
        $(".other-title").hide(500);  // if/when any selection other than "Other" is chosen, take half a second to hide(). 
    };
});
// T-Shirt Info Section.  Show ONLY the t-shirt options that correspond to the selection.
$("#design").change(() => { //selects the design dropdown and add a "change" listener to it.
    const $design = event.target.value;  // store the value of the target inside the design dropdown.
    if ($design == "js puns") {  // conditional: takes the "value=" of $design and compares it to "js puns".
        $('#colors-js-puns').show(500);
        $("#color option:contains('Puns')").show();  // IF the selection equals "js puns", show() the options that contain "Puns" in the text.
        $("#color option:contains('JS shirt')").hide(); // IF the selection equals "js puns", hide() the options that contain "JS shirt" in the text.
    } else if ($design == "heart js") { // conditional: takes the "value=" of $design and compares it to "heart js".
        $('#colors-js-puns').show(500);
        $("#color option:contains('JS shirt')").show(); // IF the selection equals "heart js", show() the options that contain "JS shirt" in the text.
        $("#color option:contains('Puns')").hide();  // IF the selection equals "heart js", hide() the options that contain "Puns" in the text.
    } else {
        $('#colors-js-puns').hide(500);
        $("#color option:contains('Puns')").show();  // IF the selection doesn't equal "js puns", show() all options.
        $("#color option:contains('JS shirt')").show(); // IF the selection doesn't equal "heart js", show() all options.
    };
});

// Registration Section
// will need refactoring and revision.  There has to be a better way than the way I will do it.
//Disabling activities
$activities.change((event) => {
    $activityName = event.target.name;  // stores the event.targets name into the var $activityName.  Key note:  important in the "check/uncheck engine at the end of this .chnage()!

    switch ($activityName) { // refactor into a object literal?
        case "all":  // if it is the CASE that $activityName == "all", do the following...
            $activityConflict = "";  // this is the "conflict" with this choice.
            if ($(`input[name="${$activityName}"]`).is(':checked')) {  //checks to see if the box is checked.
                $confTotal += 200;  // if the box is not checked, add $200
                $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
            } else {
                $confTotal -= 200;  // if the box was unchecked (therefore not siging up for the talk), remove $200
                $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
            };
            break;
        case "js-frameworks":  // if it is the CASE that $activityName == "js-frameworks", do the following...
            $activityConflict = "express";  // this is the "conflict" with this choice.
            if ($(`input[name="${$activityName}"]`).is(':checked')) {//checks to see if the box is checked.
                $confTotal += 100;  // if the box is not checked, add $100
                $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
            } else {
                $confTotal -= 100;  // if the box was unchecked (therefore not siging up for the talk), remove $100
                $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
            };
            break;
        case "js-libs":  // if it is the CASE that $activityName == "js-libs", do the following...
            $activityConflict = "node";  // this is the "conflict" with this choice.
            if ($(`input[name="${$activityName}"]`).is(':checked')) {//checks to see if the box is checked.
                $confTotal += 100;  // if the box is not checked, add $100
                $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
            } else {
                $confTotal -= 100;// if the box was unchecked (therefore not siging up for the talk), remove $100
                $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
            };
            break;
        case "express":  // if it is the CASE that $activityName == "express", do the following...
            $activityConflict = "js-frameworks";  // this is the "conflict" with this choice.
            if ($(`input[name="${$activityName}"]`).is(':checked')) {//checks to see if the box is checked.
                $confTotal += 100;  // if the box is not checked, add $100
                $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
            } else {
                $confTotal -= 100;// if the box was unchecked (therefore not siging up for the talk), remove $100
                $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
            };
            break;
        case "node":  // if it is the CASE that $activityName == "node", do the following...
            $activityConflict = "js-libs";  // this is the "conflict" with this choice.
            if ($(`input[name="${$activityName}"]`).is(':checked')) {//checks to see if the box is checked.
                $confTotal += 100;  // if the box is not checked, add $100
                $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
            } else {
                $confTotal -= 100;// if the box was unchecked (therefore not siging up for the talk), remove $100
                $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
            };
            break;
        case "build-tools":  // if it is the CASE that $activityName == "build-tools", do the following...
            $activityConflict = "";  // this is the "conflict" with this choice.
            if ($(`input[name="${$activityName}"]`).is(':checked')) {//checks to see if the box is checked.
                $confTotal += 100;  // if the box is not checked, add $100
                $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
            } else {
                $confTotal -= 100;// if the box was unchecked (therefore not siging up for the talk), remove $100
                $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
            };
            break;
        case "npm":  // if it is the CASE that $activityName == "npm", do the following...
            $activityConflict = "";  // this is the "conflict" with this choice.
            if ($(`input[name="${$activityName}"]`).is(':checked')) {//checks to see if the box is checked.
                $confTotal += 100;  // if the box is not checked, add $100
                $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
            } else {
                $confTotal -= 100;// if the box was unchecked (therefore not siging up for the talk), remove $100
                $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
            };
            break;
        default: // the default...
            break;
    };
    // the engine that check and unchecks boxes.  Uses template literals
    if($(`input[name="${$activityName}"]`).is(':checked')) {  // when the target checkbox is checked...
        $(`input[name="${$activityConflict}"]`).prop('disabled', true); // run through the switch and find the $activityConflict and disable its checkbox.
    } else {  // WHEN the target is UNCHECKED... 
        $(`input[name="${$activityConflict}"]`).prop('disabled', false);  //run through the switch and enable the conflicts checkbox.
    };
    $("#cost").text($confTotal);  // this takes the amount stored in $confTotal and writes it to the screen 
});

//payment section
//set CC to default.  hide bitcoin and paypal <div>'s
$('option[value="select_method"]').prop('disabled', true); //disables the 'select_method' option but doesn't remove it.

const $ccSelector = $('.credit-card');  // var for the Credit card form.
const $paypalSelector = $('p:contains("PayPal")'); // var for the paypal notice
const $bitcoinSelector = $('p:contains("Bitcoin")'); // var for the bitcoin notice

const $paymentSelector = $('select[name="user_payment"]');  // var for the payment dropdown menu

$paymentSelector.change(() => {  // this dicates what payment items are shown.
    if ($paymentSelector[0].value == 'credit card') {  // IF the value of the dropdown is "credit card" do the following
        $paypalSelector.show(); // == SHOW == the paypal <div>
        $ccSelector.show();  //  the "credit card" form!
        $paypalSelector.hide(); // hide the paypal <div>
        $bitcoinSelector.hide(); //hide the bitcoin <div>
    } else if ($paymentSelector[0].value == 'paypal') {
        $ccSelector.hide(); //hide the credit card form
        $paypalSelector.show(); // == SHOW == the paypal <div>
        $bitcoinSelector.hide(); //hide the bitcoin <div>
    } else if ($paymentSelector[0].value == 'bitcoin') {
        $ccSelector.hide(); //hide the credit card form
        $paypalSelector.hide(); // hide the paypal <div>
        $bitcoinSelector.show(); // == SHOW == the bitcoin <div>
    };
});

//$('button')
$('#debug').click(() => {
    //====================================================general info
    let $nameInput = $('#name:input'); // ====================================  Name:
    if($nameInput[0].value == '') {
        $nameInput.attr('placeholder', 'Please enter your name!');
        $nameInput.css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
        $nameInput.focus(() => {
            $nameInput.attr('placeholder', '');
            $nameInput.css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
        });
    } else {
        alert('you entered the name : ' + $nameInput[0].value);
    };

    let $emailInput = $('#mail:input');  // ====================================  email:
    if($emailInput[0].value == '') {
        $emailInput.attr('placeholder', 'Please enter your email!');
        $emailInput.css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
        $emailInput.focus(() => {
            $emailInput.attr('placeholder', '');
            $emailInput.css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
        });
    };

// =========================================================================================  job role
    let $jobRole = $('#title')[0].value; // loads the variable $jobRole with thevalue of the dropdown.
    if($jobRole == 'other') {  // if the value of $jobRole is 'other', run the following code...
        if($('#other-title')[0].value == '') {  // checks to see in the "otherJobRole" input field is empty.  If it is, run the following code...
            $('#other-title:input').css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
            $('#other-title:input').focus(() => {
                $('#other-title:input').attr('placeholder', 'Enter your role...');
                $('#other-title:input').css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
            });
        };
    };

    // ===================================================================== shirt section
    let $shirtSize = $('#size')[0].value;
    let $shirtDesign = $('#design')[0].value;
    let $shirtColor = $('#color')[0].value;
    if ($shirtDesign == 'Select Theme') {
        alert('please choose a shirt theme!');
        $('.shirt').css({"color" : "red"});
        $('#design').css({"border-color" : "red", "background-color" : "#F5B7B1"});
        $('#design').focus(() => {
            $('.shirt').css({"color" : ""});
            $('#design').css({"border-color" : "inherit", "background-color" : ""});
        });
    } else {
        alert('the shirt you chose was : ' + $shirtColor);
    };

    // at least one checkbox must be checked in the activities section ========================activities
    if($numOfCheckmarks <= 0) {
        $('.activities').css({"color" : "red"});
         $('input[type=checkbox').focus(() => {
            $('.activities').css({"color" : ""});
        })
    };

    let $paymentInput = $paymentSelector[0].value;   // ====================================  payment
    if($paymentInput != 'credit card') {
        alert($paymentInput);  // if the dropdown is anything but "creditcard" do stuff here
    } else {
        alert($paymentInput);
        let $ccNumber = $('#cc-num:input')[0].value;
        let $ccZipCode = $('#zip:input')[0].value;
        let $ccCVV = $('#cvv:input')[0].value;
        let $ccPaymentExpMonth = $('#exp-month')[0].value;
        let $ccPaymentExpYear = $('#exp-year')[0].value;

        // if white space in the CC number, remove it.  Then check the length
        // of the cc string
        let $ccNumber_updated = $ccNumber.replace(/\s+/g, ''); // uses regex.
        if($ccNumber_updated.length < 13) {
            $('#cc-num:input')[0].value = '';
            $('#cc-num:input').attr('placeholder', 'Your CC# is less than 13!');
            $('#cc-num:input').css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
            $('#cc-num:input').focus(() => {
                $('#cc-num:input').attr('placeholder', '');
                $('#cc-num:input').css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
            });
        };
        if($ccNumber_updated.length > 16) {
            $('#cc-num:input')[0].value = '';
            $('#cc-num:input').attr('placeholder', 'Your CC# is more than 16!');
            $('#cc-num:input').css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
            $('#cc-num:input').focus(() => {
                $('#cc-num:input').attr('placeholder', '');
                $('#cc-num:input').css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
            });
        };
        if($ccNumber_updated.length == 0) {
            $('#cc-num:input').attr('placeholder', 'You must provide a CC number!!');
            $('#cc-num:input').css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
            $('#cc-num:input').focus(() => {
                $('#cc-num:input').attr('placeholder', '');
                $('#cc-num:input').css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
            });
        };

        // alert($ccNumber_updated); // if its credit card, do credit card stuff here.
        // alert($ccZipCode);
        // alert($ccCVV);
        // alert($ccPaymentExpMonth);
        // alert($ccPaymentExpYear);
    
        if($ccZipCode.length == '' || $ccZipCode.length < 5 || $ccZipCode.length > 5) { // =========cc zipcode
            
            $('#zip:input')[0].value = '';
            $('#zip:input').attr('placeholder', 'Invalid Zipcode');
            $('#zip:input').css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
            $('#zip:input').focus(() => {
                $('#zip:input').attr('placeholder', '');
                $('#zip:input').css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
            });
        } else if ($ccZipCode.length == 5) {
            alert('yay, your zip is 5');
        };
        //payment cvv
        if($ccCVV.length == '' || $ccCVV.length < 3 || $ccCVV.length > 3) {
            $('#cvv:input')[0].value = '';
            $('#cvv:input').attr('placeholder', 'Invalid CVV');
            $('#cvv:input').css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"});
            $('#cvv:input').focus(() => {
                $('#cvv:input').attr('placeholder', '');
                $('#cvv:input').css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"});
            });
        } else {
            alert('valid cvv');
        };
    };

//credit card section : all fields must be filled in.
//CC vilidation is only allowed when CREDIT CARD is chosen in the drop down!
// card number should be between 13 and 16 digits
//zip code must be 5 digits
//CVV must be 3 digits
});