/* =============================================
Treehouse Techdegree:  FSJS project 3 - Interactive Form
Tested in the following browsers:  Chrome, Opera,
================================================ */
// Global Variables
let $activities = $('.activities'); // sets the activities section to the $activities variable.
let $validation = $('form'); // set the whole form to the $validation variable.
let $confTotal = 0; // Will take in the cost of each conference class
let $numOfCheckmarks = 0; // this will be used to make sure at least one option is chosen.  for validation.

/* == Full Stack Conf == Init function == 
/  == Sets the initial variables and settings for the page */
$(document).ready(() => {  // .ready() waits till the HTML and CSS loads
    $initFocus = $('#name').focus(); // sets initial focus on the "Name:" input.
    $('form').attr('novalidate', true);  // turns off browser validation.
    $otherRole = $(".other-title").hide(); // hides .other-title <div>.  choosing "other" will unhide this.  
    $('option[value="credit card"]').attr('selected', true);  // Sets the payment dropdown to the Credit card
    $bitcoinSelector.hide();  // initialy hides the bitcoin payment <div>.
    $paypalSelector.hide();  //initially hides the paypal <div>
    $('#colors-js-puns').hide();  //initially hides the "colors" drop down.
    $('input[type=checkbox]:checked').prop('checked', false); //clears out the checkboxes on refresh/back.

    // == EMAIL INIT == Adds a list below the email input.
    let ul = document.createElement('ul'); // creates a <ul> for the email requirements 
    let li_1 = document.createElement('li'); //creates an <li>.
    let li_2 = document.createElement('li'); //creats a second <li>
    ul.className = 'email-list';  //Adds a class name to the newly created <ul>
    li_1.textContent = 'Your email must contain one "@"';  //adds some text to the first <li>.  This is for manipulation later...specifically targeting the "@"
    li_2.textContent = 'Your email must contain one period AFTER the ampersand';  //adds some text to the second <li>. for manipulatiuon later...specifically the word "period"
    $('#mail:input').after(ul); // places the <ul> AFTER the <input id=""mail>.
    ul.appendChild(li_1);  //appends the child <li> named li_1 to the <ul>
    li_1.after(li_2);  //appends the second child <li> names li_2 after the first <li>

    // == Activity Total ==  Creates the activity total and inserts it into the html.
    let divTotal = document.createElement('div');
    let pTotal = document.createElement('p');
    let spanTotal = document.createElement('span');
    divTotal.className = "confTotal";
    spanTotal.className = "cost";
    pTotal.className = "pTotal"
    pTotal.textContent = "Your current total : $";
    spanTotal.textContent = 0;
    $('.activities').append(divTotal);
    divTotal.appendChild(pTotal);
    pTotal.appendChild(spanTotal);
});

// EMAIL REAL-TIME validation
$('#mail:input').keyup(() => {  //whenever a keyup event happens in the email <input> ...
    let $emailCheck = $('#mail:input')[0].value;  // stores the value of the <input>
     //splits the input value at a "@" symbol.  doesn't happen till a "@" symbol happens
    if($emailCheck.includes("@")) { // this checks the input for a "@"  if it happens, do the following...
        $('li:contains("@")').hide(500);  // if the <input> contains a "@", hide the <li> that says 'must have a "@"'
        let $emailCheckSplit = $emailCheck.split("@");
        if($emailCheckSplit[1].includes('.')) {  //after the "@" happens, check to see if the second part of the input has a period.
            $('li:contains("period")').hide(500); // if it does have a period, then hide the message.
        };
        if(!$emailCheck.includes("@")) { // if the <input> does NOT have a "@" show the messages
        $('li:contains("@")').show(500); //show() the message
        $('li:contains("period")').show(500); // since the "@" is not present, the stuff in the <input> cannot be an email. show() the period msg 
        };
        if(!$emailCheckSplit[1].includes('.')) {  //checks to see if only the period is missing, if it is, show the period message
            $('li:contains("period")').show(500);  //show() the message
        };
    };
    if(!$emailCheck.includes("@")) { // if the <input> does NOT have a "@" show the messages
        $('li:contains("@")').show(500); //show() the message
        $('li:contains("period")').show(500); // since the "@" is not present, the stuff in the <input> cannot be an email. show() the period msg 
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
        $('#colors-js-puns').show(500);  // show()'s the "colors" drop down when a theme is selected
        $("#color option:contains('Puns')").show();  // IF the selection equals "js puns", show() the options that contain "Puns" in the text.
        $('option[value=cornflowerblue]').attr('selected', true);
        $('option[value=tomato]').attr('selected', false);
        $("#color option:contains('JS shirt')").hide(); // IF the selection equals "js puns", hide() the options that contain "JS shirt" in the text.
    } else if ($design == "heart js") {
        $('#colors-js-puns').show(500);  // show()'s the "colors" drop down when a theme is selected
        $("#color option:contains('JS shirt')").show(); // IF the selection equals "heart js", show() the options that contain "JS shirt" in the text.
        $('option[value=tomato]').attr('selected', true);
        $('option[value=cornflowerblue]').attr('selected', false);
        $("#color option:contains('Puns')").hide();  // IF the selection equals "heart js", hide() the options that contain "Puns" in the text.
    } else {
        $('#colors-js-puns').hide(500);  // if the "select theme" drop down is moved back to "select Theme" hide the "colors" drop down
        $("#color option:contains('Puns')").show();  // IF the selection doesn't equal "js puns", show() all options.
        $("#color option:contains('JS shirt')").show(); // IF the selection doesn't equal "heart js", show() all options.
    };
});
// == Changes the background to the color of the shirt you choose
$("#color").change(() => {
    let $color = event.target.value;
    $('body').css('background-color', $color);
});

// Registration Section
$activities.change((event) => {  // The change event for the activities section.  NEEDS MAJOR REFACTORING!!!
    $activityName = event.target.name;  // stores the event.targets name into the var $activityName.  Key note:  important in the "check/uncheck engine at the end of this .chnage()!
    
    switch ($activityName) { // refactor into an object literal?
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
            $activityChecks();
            break;
        case "js-libs":  // if it is the CASE that $activityName == "js-libs", do the following...
            $activityConflict = "node";  // this is the "conflict" with this choice.
            $activityChecks();
            break;
        case "express":  // if it is the CASE that $activityName == "express", do the following...
            $activityConflict = "js-frameworks";  // this is the "conflict" with this choice.
            $activityChecks();
            break;
        case "node":  // if it is the CASE that $activityName == "node", do the following...
            $activityConflict = "js-libs";  // this is the "conflict" with this choice.
            $activityChecks();
            break;
        case "build-tools":  // if it is the CASE that $activityName == "build-tools", do the following...
            $activityConflict = "";  // this is the "conflict" with this choice.
            $activityChecks();
            break;
        case "npm":  // if it is the CASE that $activityName == "npm", do the following...
            $activityConflict = "";  // this is the "conflict" with this choice.
            $activityChecks();
            break;
        default:
            break;
    };
    // the engine that check and unchecks boxes.  Uses template literals
    if($(`input[name="${$activityName}"]`).is(':checked')) {  // when the target checkbox is checked...
        $(`input[name="${$activityConflict}"]`).prop('disabled', true); // run through the switch and find the $activityConflict and disable its checkbox.
    } else {
        $(`input[name="${$activityConflict}"]`).prop('disabled', false);  //run through the switch and enable the conflicts checkbox.
    };
    $('.pTotal').text("Your current total : $" + $confTotal);  // this takes the amount stored in $confTotal and writes it to the screen 
});

//payment section
$('option[value="select_method"]').prop('disabled', true); //disables the 'select_method' option but doesn't remove it.

const $ccSelector = $('.credit-card');  // var for the Credit card form.
const $paypalSelector = $('p:contains("PayPal")'); // var for the paypal notice
const $bitcoinSelector = $('p:contains("Bitcoin")'); // var for the bitcoin notice
const $paymentSelector = $('select[name="user_payment"]');  // var for the payment dropdown menu

$paymentSelector.change(() => {  // this dicates what payment items are shown.
    if ($paymentSelector[0].value == 'credit card') {  // IF the value of the dropdown is "credit card" do the following
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

// == Button Click ==
$('button').click((event) => {  // this runs the validity checks.  also brings a LOT of the code together.

    // == Name section ==
    let nameValid = false;  // validity `check for the "NAME" section.  Set initially to false
    let $nameInput = $('#name:input');  //  inserts the name input in the variable
    if($nameInput[0].value == '') {  // IF() the value of the $nameInput is empty....
        $inputError('#name', 'Please enter your name!');
    } else { 
        nameValid = true;  // if this section is valid turns the "flag" to TRUE
    };

// == email section ==
    let emailValid = false;   // validity check for the "EMAIL" section.  Set initially to false
    let $emailInput = $('#mail:input');  //  inserts the value of the text input in the variable
    let $emailCheck = $('#mail:input')[0].value;
    if($emailInput[0].value == '') {  //if() the value of the $emailInput is empty....
        $inputError('#mail', 'Please enter a valid email!');
    } else {
        if($emailCheck.includes("@")) {  //checks to see if the <input> has a "@"
            let $emailCheckSplit = $emailCheck.split("@"); //if it does, split the string.
            if($emailCheckSplit[1].includes(".")) { // checks if the second part of the split has a period.
                let $emailCheckSplit2 = $emailCheckSplit[1].split(".");  // if it does, split the second string.
                if($emailCheckSplit2[1].length >= 2) { // checks if the string after the period has 2 or more characters. *i don't recall there being 1 cahracter TLD's*
                    emailValid = true;  // if this section is valid turns the "flag" to TRUE
                }; 
            };
        };
    };

// == job role section ==
    let jobValid = false;    // validity check for the "JOB ROLE" section.  Set initially to false
    let $jobRole = $('#title')[0].value; // loads the variable $jobRole with thevalue of the dropdown.
    if($jobRole == 'other') {  // if the value of $jobRole is 'other', run the following code...
        if($('#other-title')[0].value == '') {  // checks to see in the "otherJobRole" input field is empty.  If it is, run the following code...
            $inputError('#other-title', 'Enter a role into this field!')
        } else {
            jobValid = true;  // if this section is valid turns the "flag" to TRUE
        };
    } else {
        jobValid = true;  // if this section is valid turns the "flag" to TRUE
    };

// == shirt section ==
    let $shirtDesign = $('#design')[0].value;  // inserts the shirt design value into the varialbe $shirtDesign.
    let shirtValid = false;    // validity check for the "SHIRT" section.  Set initially to false
    if ($shirtDesign == 'Select Theme') {  // if the shirt themes value equals "select Theme", do the following...
        $('.shirt').css({"color" : "red"});  //change the text of the section
        $('#design').css({"border-color" : "red", "background-color" : "#F5B7B1"});  //  changes the border and colore of the design box to red-ish.
        $('#design').focus(() => {  //  on re-focus after validity check, this resets the dropdown
            $('.shirt').css({"color" : ""});  //  resets the color to black
            $('#design').css({"border-color" : "inherit", "background-color" : ""});  // reverts the border and BG back to normal
        });
    } else {
        shirtValid = true;  // if this section is valid turns the "flag" to TRUE
    };

// == activities section ==
    let activityValid = false;    // validity check for the "ACTIVITIES" section.  Set initially to false
    if($numOfCheckmarks <= 0) {  // if the numbers of checkmarks are 0 or less (just in case), run the invalidity code.
        $('.activities').css({"color" : "red"});  //change the text of the section AND cost to red if there is an error
         $('input[type=checkbox').focus(() => {  //on re-focus(click any of the boxes) change the text back to normal color.
            $('.activities').css({"color" : ""}); //  thios changes the color back to normal
        });
    } else {
        activityValid = true;  // if this section is valid turns the "flag" to TRUE
    };

// == payment section ==
    let $paymentInput = $paymentSelector[0].value;  // inserts the value of the payment drop down into the $paymentInput variable.
    let paymentValid = false;    // validity check for the "PAYMENT" section.  Set initially to false
    if($paymentInput != 'credit card') {  // if() the value of $paymentInput DOES NOT equal 'credit card' run the following code...
        paymentValid = true;  // if this section is valid turns the "flag" to TRUE.
    } else {
        let $ccNumber = $('#cc-num:input')[0].value;  //  insert the value from the CC# <input> into $ccNumber variable
        let $ccZipCode = $('#zip:input')[0].value;  // inserts the value of the zipcode <input> into the $ccZipCode variable.
        let $ccCVV = $('#cvv:input')[0].value;  //inserts the value of the CVV <input> into the $ccCVV variable
    
        // if white space in the CC number, remove it.  Then check the length of the cc string
        let $ccNumber_updated = $ccNumber.replace(/\s+/g, ''); // uses regex to remove the spaces(if present) in the value.  NOT MINE:  Found the regex on StackOverflow.
        if($ccNumber_updated.length < 13) {
            $inputError('#cc-num', 'Your CC# is less than 13!');
        };
        if($ccNumber_updated.length > 16) {
            $inputError('#cc-num', 'Your CC# is more than 16!');
        };
        if($ccNumber_updated.length == 0) {
            $inputError('#cc-num', 'Please provide a CC#!');
        };
        if(($ccNumber_updated / 1) != $ccNumber_updated) {   // checks to see if the string entered is a number.
            $inputError('#cc-num', 'Your entry contained letter(s)!');
        };
// == cc zipcode ==
        if($ccZipCode.length == '' || $ccZipCode.length < 5 || $ccZipCode.length > 5 || (($ccZipCode / 1) != $ccZipCode)) {  // If() the length of the Zip Code is either empty, <5, or >5, and/or and/or has a letter, do the following...
            $inputError('#zip', 'Invalid zipcode!');
        };
// == payment cvv ==
        if($ccCVV.length == '' || $ccCVV.length < 3 || $ccCVV.length > 3 || (($ccCVV / 1) != $ccCVV)) {  //  IF() the length of the CVV is either empty, <3, or >3, and/or has a letter, run the following...
            $inputError('#cvv', 'Invalid CVV!');
        };
        // == checks if the payment section is ALL valid! ==
        if( (($ccNumber_updated / 1) == $ccNumber_updated) && $ccNumber_updated.length >= 13 && $ccNumber_updated.length <= 16 && $ccZipCode.length == 5 && (($ccZipCode / 1) == $ccZipCode) && $ccCVV.length == 3 && (($ccCVV / 1) == $ccCVV)) { // If the CC# is valid, the ZipCode is valid, and the CVV is valid, turn the paymentVaild to true.
           paymentValid = true;  // if this section is valid turns the "flag" to TRUE   
        };
    };

// == submit validation ==
    if(nameValid && emailValid && jobValid && shirtValid && activityValid && paymentValid) { //if ALL the different section are TRUE, return TRUE(lets the button submit)
        $('form').html('Thank you for registering for Full Stack Conf!');
        return true;  // returns TRUE
    } else {
        return false;  // returns FALSE
    };    
});

// Utility function(s)
// == Activities Checkbox function ==
function $activityChecks() {
    if ($(`input[name="${$activityName}"]`).is(':checked')) {//checks to see if the box is checked.
        $confTotal += 100;  // if the box is not checked, add $100
        $numOfCheckmarks +=1; //  Adds 1 to the check marks variable.  Used for validation!
    } else {
        $confTotal -= 100;// if the box was unchecked (therefore not siging up for the talk), remove $100
        $numOfCheckmarks -=1;  // removes 1 from the $number of checkmarks variable.  used for validation.
    };
};
//  == Input Text Field Error Function ==
function $inputError(textInput, errorResponse) {
    $(`${textInput}:input`)[0].value = '';  // remove the current value.
    $(`${textInput}:input`).attr('placeholder', errorResponse);;  // add the placeholder text letting user know the problem!
    $(`${textInput}:input`).css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"}); // change the input box to redish
    $(`${textInput}:input`).focus(() => {  // on re-focus, reset the input!
        $(`${textInput}:input`).attr('placeholder', '');  // removes the placeholder text
        $(`${textInput}:input`).css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"}); // resets the input box
    });
};
// Thank you for reading this far!  I hope you enjoyed!  :) 