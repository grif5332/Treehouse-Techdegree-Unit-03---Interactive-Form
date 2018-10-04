

function $inputError(textInput, errorResponse) {
    $(`${textInput}:input`)[0].value = '';  // remove the current value.
    $(`${textInput}:input`).attr('placeholder', errorResponse);;  // add the placeholder text letting user know the problem!
    $(`${textInput}:input`).css({"border-color" : "red", "background-color" : "#F5B7B1", "color" : "red"}); // change the input box to redish
    $(`${textInput}:input`).focus(() => {  // on re-focus, reset the input!
        $(`${textInput}:input`).attr('placeholder', '');  // removes the placeholder text
        $(`${textInput}:input`).css({"border-color" : "inherit", "background-color" : "", "color" : "inherit"}); // resets the input box
    });
};