// Submit Button Clicked
$("#submit-button").click(submitButtonClicked)


// Open Email Client to send email
function submitButtonClicked(e) {
    e.preventDefault();
    const sEmailMe = $("#email").text();
    const sName = $("#form-name").val();
    const sSubject= $("#form-subject").val();
    const sMessage = $("#form-message").val();

    window.open(`mailto:${sEmailMe}?subject=${sSubject}&body=${sMessage}`);
}