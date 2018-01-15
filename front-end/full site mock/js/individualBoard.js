var users = ["User A", "User B", "User C", "User D"];
var activities = ["Analysis", "Design", "Development", "Research"];
var colours = ["#3498DB", "#CB4335", "#8E44AD", "#1ABC9C"];
var efforts = [1, 2, 3, 4, 5];

var effortCompleted = 0;
var taskCompleted = 0;
var teamProductivityPerc = 0;

$( document ).ready(function() {

	var todoSize = $("ul#todoSection li").length;
	var inProgressSize = $("ul#inProgressSection li").length;
	var completedSize = $("ul#completedSection li").length;

	document.getElementById("toDoLabel").innerHTML = "To Do: " + todoSize;
	document.getElementById("inProgressLabel").innerHTML = "In Progress: " + inProgressSize;
	document.getElementById("completedLabel").innerHTML = "Completed: " + completedSize;

	document.getElementById("boardTitle").innerHTML = "Board A";
	document.getElementById("taskCompletion").innerHTML = "Tasks Completed: " + taskCompleted + "%";
	document.getElementById("effortCompletion").innerHTML = "Effort Completed: " + effortCompleted + "%";
	document.getElementById("teamProductivity").innerHTML = "Team Productivity: " + teamProductivityPerc + "%";

	loadSelectlist('cardOwner', users);
	loadSelectlist('editcardOwner', users);
	loadSelectlist('cardActivity', activities);
	loadSelectlist('editcardActivity', activities);
	loadSelectlist('cardEffort', efforts);
	loadSelectlist('editcardEffort', efforts);

	colourSelectlist('cardActivity', colours);
	colourSelectlist('editcardActivity', colours);

	insertCard("Card A", "No Desc...", "User A", "Analysis", 4 );
	insertCard("Card B", "No Desc...", "User B", "Design", 2 );
	insertCard("Card C", "No Desc...", "User B", "Development", 2 );
	insertCard("Card D", "No Desc...", "User D", "Research", 5 );

	updateKanban();
});

$( function() {
	$("#todoSection, #inProgressSection, #completedSection").sortable({
		connectWith: ".board-card-section"
		
	}).disableSelection();
});


$( function() {
	$("#todoSection").sortable({
		update: function() {
			var size = $("ul#todoSection li").length;
			document.getElementById("toDoLabel").innerHTML = "To Do: " + size;
			updateKanban();
		}
	}).disableSelection();
});

$( function() {
	$("#inProgressSection").sortable({
		update: function() {
			var size = $("ul#inProgressSection li").length;
			document.getElementById("inProgressLabel").innerHTML = "In Progress: " + size;
			updateKanban();
		}
	}).disableSelection();
});

$( function() {
	$("#completedSection").sortable({
		update: function() {
			var size = $("ul#completedSection li").length;
			document.getElementById("completedLabel").innerHTML = "Completed: " + size;
			updateKanban();
		}
	}).disableSelection();
});

function getListId(own, data = []) {
    return data.indexOf(own);
};

function dec2hex(dec) {
    return ('0' + dec.toString(16)).substr(-2)
};

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
};

// Loads an array of data into a dropdown list
function loadSelectlist(list, data) {
    var sel = document.getElementById(list);
    var fragment = document.createDocumentFragment();

    data.forEach(function (item, index) {
        var opt = document.createElement('option');
        opt.innerHTML = item;
        opt.value = item;
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);
};

// Adds colour to a dropdown list using a colour array
function colourSelectlist(list, colourset) {
    var sel = document.getElementById(list);
    var options = sel.getElementsByTagName('option');

    for(i = 0; i < options.length; i++)
        options[i].style = "color: " + colourset[i] + ";";
};

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

function createCard(cardName, cardDescription, cardOwner, cardActivity, cardEffort) {
	if(isEmpty(cardName) || isEmpty(cardDescription) || isEmpty(cardOwner) 
		|| isEmpty(cardActivity) || isEmpty(cardEffort))
		//// console.log("Form has an empty element");
	$('#create-card-modal').modal('hide');
	$('#cardName').val('');
	$('#cardDescription').val('');
	$('#cardOwner').val('');
	$('#cardActivity').val('');
	$('#cardEffort').val('');
	insertCard(cardName, cardDescription, cardOwner, cardActivity, cardEffort);
};

function insertCard(cardName, cardDescription, cardOwner, cardActivity, cardEffort) {
	
	var activityIdType = null;
	if(cardActivity == "Analysis") {
		activityIdType = "analysis-activity";
	}
	if(cardActivity == "Design") {
		activityIdType = "design-activity";
	}
	if(cardActivity == "Development") {
		activityIdType = "development-activity";
	}
	if(cardActivity == "Research") {
		activityIdType = "research-activity";
	}
	var id =  generateId(); 
	var todoColumn = document.getElementById('todoSection');
	var newCard = '<li class="list-group-item card-container '+ activityIdType +'" id="' + id + '" onclick="editCard(this)" data-toggle="modal" data-target="#edit-card-modal"><div class="container"><div class="row"><div class="col-12 board-card"><h5 class="card-title">' + cardName + '</h5></div></div><div class="row"><div class="col-9"><p id="owner-title-label"> Owner Name: </p><p class="card-owner">' + cardOwner + '</p></div><div class="col-3" style="float:right;"><p style="float:left; margin-right: 10px;">Effort: </p><p class="card-effort-level">' + cardEffort + '</p></div></div><p class="card-description" hidden="true">' + cardDescription + '</p><p class="card-activity" hidden="true">' + cardActivity + '</p></div></li>';

	todoColumn.insertAdjacentHTML('beforeend', newCard);

	var size = $("ul#todoSection li").length;
	document.getElementById("toDoLabel").innerHTML = "To Do: " + size;

	updateKanban();

};

function editCard(e) {

	var id = $(e).attr('id');
	var title = e.getElementsByClassName('card-title')[0].innerHTML;
	var desc = e.getElementsByClassName('card-description')[0].innerHTML;
	var activity = e.getElementsByClassName('card-activity')[0].innerHTML;
    var own = e.getElementsByClassName('card-owner')[0].innerHTML;
    var effort = e.getElementsByClassName('card-effort-level')[0].innerHTML;

    document.getElementById('editcardId').value = id;
    document.getElementById('editcardName').value = title;
    document.getElementById('editcardDescription').value = desc;
    document.getElementById('editcardOwner').value = own;
    document.getElementById('editcardActivity').value = activity;
    document.getElementById('editcardEffort').value = effort;

};

function updateCard(cardId, cardName, cardDescription, cardOwner, cardActivity, cardEffort) {

	var e = document.getElementById(cardId);

	if($(e).hasClass("analysis-activity")) {
		$(e).removeClass("analysis-activity");
	}
	if($(e).hasClass("design-activity")) {
		$(e).removeClass("design-activity");
	}
	if($(e).hasClass("development-activity")) {
		$(e).removeClass("development-activity");
	}
	if($(e).hasClass("research-activity")) {
		$(e).removeClass("research-activity");
	}

	e.getElementsByClassName('card-title')[0].innerHTML = cardName;
    e.getElementsByClassName('card-description')[0].innerHTML = cardDescription;
    e.getElementsByClassName('card-activity')[0].innerHTML = cardActivity;
    e.getElementsByClassName('card-owner')[0].innerHTML = cardOwner;
    e.getElementsByClassName('card-effort-level')[0].innerHTML = cardEffort;

    if(cardActivity == "Analysis") {
		activityIdType = "analysis-activity";
	}
	if(cardActivity == "Design") {
		activityIdType = "design-activity";
	}
	if(cardActivity == "Development") {
		activityIdType = "development-activity";
	}
	if(cardActivity == "Research") {
		activityIdType = "research-activity";
	}

    $(e).addClass(activityIdType);



    $('#edit-card-modal').modal('hide');
	$('#cardName').val('');
	$('#cardDescription').val('');
	$('#cardOwner').val('');
	$('#cardActivity').val('');
	$('#cardEffort').val('');

	updateKanban();
};

function removeCard(id) {

	var e = document.getElementById(id);
	e.parentElement.removeChild(e);

	$('#edit-card-modal').modal('hide');
	$('#cardName').val('');
	$('#cardDescription').val('');
	$('#cardOwner').val('');
	$('#cardActivity').val('');
	$('#cardEffort').val('');

	updateKanban();
};

// Calculation for team productivity
function computeTeamProductivity(teamarr) {
    var count = 0;
    var total = teamarr.length;
    for (i = 0; i < teamarr.length; i++)
        if (teamarr[i] > 0)
            count++;

    return round(count / total * 100, 1);
};

function updateKanban() {

    var doingsection = document.getElementById('inProgressSection');
    var donesection = document.getElementById('completedSection');

    var task = document.getElementById('taskCompletion');
    var effort = document.getElementById('effortCompletion');
    var team = document.getElementById('teamProductivity');

    var cardlist = document.getElementsByClassName('card-container');
    var doinglist = doingsection.getElementsByClassName('card-container');
    var donelist = donesection.getElementsByClassName('card-container');

    var userCount = users.length;
    var taskcount = cardlist.length;
    var taskdone = donelist.length;

    //// console.log(cardlist);

    var effortcount = 0;
    for (i = 0; i < cardlist.length; i++) {
    	//// console.log(parseInt(cardlist[i].getElementsByClassName('card-effort-level')[0].innerHTML));
        effortcount += parseInt(cardlist[i].getElementsByClassName('card-effort-level')[0].innerHTML);
    
    }

    var effortdone = 0;
    for (i = 0; i < donelist.length; i++) {
        effortdone += parseInt(donelist[i].getElementsByClassName('card-effort-level')[0].innerHTML);
    }

    var teamcheck = [];
    for (i = 0; i < users.length; i++)
        teamcheck.push(0);

    for (i = 0; i < doinglist.length; i++) {
        var owner = doinglist[i].getElementsByClassName('card-owner')[0].innerHTML;
        teamcheck[getListId(owner, users)]++;
    }

    document.getElementById("taskCompletion").innerHTML = "Tasks Completed: " + round(taskdone / taskcount * 100, 1) + "%";
	document.getElementById("effortCompletion").innerHTML = "Effort Completed: " + round(effortdone / effortcount * 100, 1) + "%";
	document.getElementById("teamProductivity").innerHTML = "Team Productivity: " + computeTeamProductivity(teamcheck) + "%";

};