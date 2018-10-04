
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

    for (let i = 1; i < $activities[0].childElementCount; i++) { // i initially set to 1 so as to skip over the "Register" <legend> tag
         alert($activities[0].children[i].textContent);
    };
    
    dev notes: when you click on a option, loop through the list
    and compare days THEN times!  IF() the loop matches a list element
    to the event.target, then disable it(cross out text AND disable
    checkbox). AT some point add the 'cost' to a global var.
    

    //alert($activityData[0]);
    //alert($activityData[1]);
    //alert($activityData[2].substr(1)); */


    
/*
    if($emailInput[0].value == '') {  //checks if the input feild is empty
        alert('an email is required!');  // IF its empty, do stuff....
    } else {  // IF there is something in the input continue
        alert('You entered the email : ' + $emailInput[0].value);
        alert($emailText);

        if($emailText.includes("@")) { // checks the text in the input for an "@" symbol. required for an email address!
            let $emailSplit = $emailText.split("@");  // if there is an "@" symbol, split() the text at the "@".  insert the result in the $emailSplit variable.
            if($emailSplit[1].includes(".")) {  //  check to see if the text AFTER the "@" symbol has a ".".  While this doesnt check for a .com or other, it does 
                alert("has a domain!");  //if  it has the format "TEXT" @ "TEXT" . "TEXT" its in a email format.
            } else {  //  If its missing the ".", then its not right.  Throw an error!
                alert('please look at your email...its missing stuff!');  //Throw an ERROR.  Its missing email stuff!
            };
        } else {  // if the text doesnt contain an "@" symbol, its NOT an email.  THROW AN ERROR!
                //error stuff here!
        };
    };
*/