// Global Variables
let $eventTotal = 0;
let $activities = $(".activities");
let $confTotal = 0; // Will take in the cost of each conference class
let $numOfCheckmarks = 0; // this will be used to make sure at least one option is chosen.  for validation.

// == Full Stack Conf == Init function 
$(document).ready(() => {  // waits till the HTML and CSS loads
    $initFocus = $('#name').focus(); // sets initial focus
    $otherRole = $(".other-title").hide(); // Hides the .other-title <div>
});
// Job Role conditional.  show()'s the ".other-title" section when "Other" is chosen.
$("#title").change(() => {
    if (title.value == 'other') { //if the selection equals 'other', show() the .other-title option.  else, do nothing.
        $(".other-title").show(500);  // half a second to show the .other-section
    } else {
        $(".other-title").hide(500);  // if/when any selection other than "Other" is chosen, take half a second to hide(). 
    };
});
// T-Shirt Info Section.  Show ONLY the t-shirt options that correspond to the selection.
$("#design").change(() => { //selects the design dropdown and add a "change" listener to it.
    const $design = event.target.value;  // store the value of the target inside the design dropdown.
    if ($design == "js puns") {  // conditional: takes the "value=" of $design and compares it to "js puns".
        $("#color option:contains('Puns')").show();  // IF the selection equals "js puns", show() the options that contain "Puns" in the text.
        $("#color option:contains('JS shirt')").hide(); // IF the selection equals "js puns", hide() the options that contain "JS shirt" in the text.
    } else if ($design == "heart js") { // conditional: takes the "value=" of $design and compares it to "heart js".
        $("#color option:contains('JS shirt')").show(); // IF the selection equals "heart js", show() the options that contain "JS shirt" in the text.
        $("#color option:contains('Puns')").hide();  // IF the selection equals "heart js", hide() the options that contain "Puns" in the text.
    } else {
        $("#color option:contains('Puns')").show();  // IF the selection doesn't equal "js puns", show() all options.
        $("#color option:contains('JS shirt')").show(); // IF the selection doesn't equal "heart js", show() all options.
    };
});

// Registration Section
// will need refactoring and revision.  There has to be a better way than the way I will do it.
//Disabling activities
$activities.change((event) => {
    $activityName = event.target.name;
    $activityConflict = "";

    switch ($activityName) {
        case "all":
            $activityConflict = "";
            break;
        case "js-frameworks":
            $activityConflict = "express";
            break;
        case "js-libs":
            $activityConflict = "node";
            break;
        case "express":
            $activityConflict = "js-frameworks";
            break;
        case "node":
            $activityConflict = "js-libs";
            break;
        case "build-tools":
            $activityConflict = "";
            break;
        case "npm":
            $activityConflict = "";
            break;
        default:
            break;
    };

    if($(`input[name="${$activityName}"]`).is(':checked')) {
        $(`input[name="${$activityConflict}"]`).prop('disabled', true);
    } else {
        $(`input[name="${$activityConflict}"]`).prop('disabled', false);
    };

    /*  Ugh....give up? 
    if (event.target.name == 'all') {
        $allText = event.target.parentElement.textContent;
        $allTextSplit = event.target.parentElement.textContent.split(' — ');
        // alert($allTextSplit[0]); //alerts the main Conf. text
        // alert($allTextSplit[1].substr(1)); // substr removes the '$' symbol
        alert($('input[type=checkbox').prop('checked')); // alerts true/false if 'checked'
    } else {
        $activityText = event.target.parentElement.textContent;
        $activitySplit = event.target.parentElement.textContent.split(' — ');
        $activityData = $activitySplit[1].split(' '); // [0] = day; [1] = time range; [2] = cost.
        $activityDay = $activityData[0];
        $activityTime = $activityData[1];

        for (let i = 1; i < $activities[0].childElementCount; i++) { // i initially set to 1 so as to skip over the "Register" <legend> tag
            let $loopedSplit = $activities[0].children[i].textContent.split(' — ');
            let $loopedDay = $loopedSplit[1].split(' ');
            let $loopedTime = $loopedSplit[1].split(' ');
        };
        // alert($activityData[0]); //alerts the conf talk
        //alert($activityData[1]); //alerts the day of talk.
        //alert(parseInt($activityData[2].substr(1))); // substr removes the '$' symbol.  parseInt() converts it from a string to an integer (for math stuff!)
        //alert($(event.target).prop('checked'));

        // disable the checkbox and greysout/strikesout the text of a conflicting event
    };

    /*
    for (let i = 1; i < $activities[0].childElementCount; i++) { // i initially set to 1 so as to skip over the "Register" <legend> tag
         alert($activities[0].children[i].textContent);
    };
    */
    /* dev notes: when you click on a option, loop through the list
    and compare days THEN times!  IF() the loop matches a list element
    to the event.target, then disable it(cross out text AND disable
    checkbox). AT some point add the 'cost' to a global var.
*/

    //alert($activityData[0]);
    //alert($activityData[1]);
    //alert($activityData[2].substr(1)); */
});

//payment section