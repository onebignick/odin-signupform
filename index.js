function handleSubmit () {
    let data = new FormData();
    
    if ($("#password").val() !== $("#confirm-password").val()) {
        alert('passwords do not match');
    } else {
        data.append("firstname", $("#firstname").val());
        data.append("lastname", $("#lastname").val());
        data.append("email", $("#email").val());
        data.append("phonenumber", $("#phonenumber").val());
        data.append("password", $("#password").val());

        for (const [key, value] of data) {
            console.log(`${key}: ${value}\n`);
        }

        alert('success!');
    }
}

$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        handleSubmit();
    });
    console.log("ready");
})