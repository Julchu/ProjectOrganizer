$( document ).ready(function() {
    // var name = document.getElementById('profile-nameid').innerHTML;
    // var userName = document.getElementById('profile-usernameid').innerHTML;
    // var emailAddress = document.getElementById('profile-emailid').innerHTML;
    $.get("/api/user", (data) => {
        if (!data.error) {
            document.getElementById('edit-name').value = data["UserID"]
            document.getElementById('edit-userName').value = data["Username"]
            document.getElementById('edit-emailAddress').value = data["EmailAddress"]
            updateProfile(data["UserID"], data["Username"], data["EmailAddress"]);
        }
    })

    // document.getElementById('edit-name').value = name;
    // document.getElementById('edit-userName').value = userName;
    // document.getElementById('edit-emailAddress').value = emailAddress;

});

// Gets value of an element
function getValue(id) {
    if(id == null) return;
    var v = document.getElementById(id).value;
    return v;
};

// Checks for empty string
function isEmpty(s) {
    return s.trim().length == 0;
};

function updateProfile(name, userName, emailAddress, post = false ) {
    if (post) $.post("/api/users/edit", {"Username": userName, "EmailAddress": emailAddress}, (data) => {
        if (!data.error) $.get("/api/user", (data) => {
            if (!data.error) {
                document.getElementById('edit-name').value = data["UserID"]
                document.getElementById('edit-userName').value = data["Username"]
                document.getElementById('edit-emailAddress').value = data["EmailAddress"]
                updateProfile(data["UserID"], data["Username"], data["EmailAddress"]);
                window.location.href = "/profile";
            }
        })
    })
    else {
            document.getElementById('profile-nameid').innerHTML = name;
            document.getElementById('profile-usernameid').innerHTML = userName;
            document.getElementById('profile-emailid').innerHTML = emailAddress;
    }
};

function changeImageToFrog() {
    var img1 = document.getElementById("profile-picture-img");
    var img2 = document.getElementById("edit-profile-picture-img");
    img1.src = "/assets/images/frog.png";
    img2.src = "/assets/images/frog.png";

    $('#edit-avatar-modal').modal('hide');
};

function changeImageToLion() {
    var img1 = document.getElementById("profile-picture-img");
    var img2 = document.getElementById("edit-profile-picture-img");
    img1.src = "/assets/images/lion.png";
    img2.src = "/assets/images/lion.png";

    $('#edit-avatar-modal').modal('hide');
};

function changeImageToDog() {
    var img1 = document.getElementById("profile-picture-img");
    var img2 = document.getElementById("edit-profile-picture-img");
    img1.src = "/assets/images/dog.png";
    img2.src = "/assets/images/dog.png";

    $('#edit-avatar-modal').modal('hide');
};

function changeImageToEagle() {
    var img1 = document.getElementById("profile-picture-img");
    var img2 = document.getElementById("edit-profile-picture-img");
    img1.src = "/assets/images/eagle.png";
    img2.src = "/assets/images/eagle.png";

    $('#edit-avatar-modal').modal('hide');
};

