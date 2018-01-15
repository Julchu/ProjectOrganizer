$(document).ready( () => {
    $.get("/api/user", (data) => {
        if (!data.error) {
            $("#profile").find("label").html("Username: " + data["Username"]
                                        + "<br>User ID: " + data["UserID"]
                                        + "<br>Email Address " + data["EmailAddress"]);
        }
    })
})