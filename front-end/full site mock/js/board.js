//insertCard('todo', 'new', 'hi', 'nick')

// Inserts a card into the given board column
function insertCard(boardColumn, title, description, owner, activity, effort)
{
    var element = document.getElementById(boardColumn);
    var id =  generateId();
    var colour = colours[getListId(activity, activities)];
    var newCard = '<div id="' + id + '" class="card" style="border-left: 7px solid ' + colour + ';" onclick="openCard(this)"><h4><b class="cTitle">' + title + '</b></h4><p class="cDesc" hidden="true">' + description + '</p><p class="cActivity" hidden="true">' + activity + '</p><p class="cOwn">' + owner + '</p><p class="cEffort">' + effort + '</p></div>';
    element.insertAdjacentHTML( 'beforeend', newCard );
    var c = document.getElementById(id);
    c.draggable = true;
}

// Updates an existing card given the card id
function updateCard(id, title, description, owner, activity, effort)
{
    var e = document.getElementById(id);
    var colour = colours[getListId(activity, activities)];
    e.style = "border-left: 7px solid " + colour + ";";
    e.getElementsByClassName('cTitle')[0].innerHTML = title;
    e.getElementsByClassName('cDesc')[0].innerHTML = description;
    e.getElementsByClassName('cActivity')[0].innerHTML = activity;
    e.getElementsByClassName('cOwn')[0].innerHTML = owner;
    e.getElementsByClassName('cEffort')[0].innerHTML = effort;
}

// Removes an existing card given the card id
function removeCard(id)
{
    var e = document.getElementById(id);
    e.parentElement.removeChild(e);
}

// UI: creates a card, closes dialog, updates headers
function createCard(boardColumn, title, description, owner, activity, effort)
{
    if(boardColumn == null || title == null  || owner == null || activity == null || effort == null ||
        isEmpty(title) || isEmpty(owner)) return;
    closeModal('NewWorkItemModal');
    insertCard(boardColumn, title, description, owner, activity, effort);
    //updateHeaders(); // update headers
}

// UI: edits a card, closes dialog, updates headers
function editCard(id, title, description, owner, activity, effort)
{
    if(id == null || title == null  || owner == null || activity == null || effort == null ||
        isEmpty(title) || isEmpty(owner)) return;
    closeModal('EditWorkItemModal');
    updateCard(id, title, description, owner, activity, effort);
    //updateHeaders(); // update headers
}

// UI: deletes a card, closes dialog, updates headers
function deleteCard(id)
{
    closeModal('EditWorkItemModal');
    removeCard(id);
    //updateHeaders(); // update headers
}

// UI: opens a card, opens dialog
function openCard(e) {
    
    var title = e.getElementsByClassName('cTitle')[0].innerHTML;
    var desc = e.getElementsByClassName('cDesc')[0].innerHTML;
    var activity = e.getElementsByClassName('cActivity')[0].innerHTML;
    var own = e.getElementsByClassName('cOwn')[0].innerHTML;
    var effort = e.getElementsByClassName('cEffort')[0].innerHTML;

    // console.log(e.id);
    // console.log(title);
    // console.log(desc);
    // console.log(activity);
    // console.log(own);
    // console.log(effort);

    document.getElementById('editcardid').value = e.id;
    document.getElementById('editcardtitle').value = title;
    document.getElementById('editcarddescription').value = desc;
    document.getElementById('edituserList').value = own;
    document.getElementById('editactivityList').value = activity;
    document.getElementById('editeffortList').value = effort;
    
    openModal('EditWorkItemModal');
}

// Updates column headers and navbar
function updateHeaders()
{
    updateHeader('todoSection', 'toDoLabel', 'To Do');
    updateHeader('inProgressSection', 'inProgressLabel', 'Doing');
    updateHeader('completedSection', 'completedLabel', 'Done');
    //updateTopnav();
}

// Updates specific column header
function updateHeader(sectionid, labelid, value)
{
    var section = document.getElementById(sectionid);
    var cardlist = section.getElementsByClassName('board-card');
    var cardcount = cardlist.length;
    var effortcount = 0;
    // for(i = 0; i < cardlist.length; i++) {
    //     effortcount += parseInt(cardlist[i].getElementsByClassName('cEffort')[0].innerHTML);
    // } 

    var label = document.getElementById(labelid);
    label.innerHTML = cardcount + " " + value + " (" + effortcount + " effort)";
}

// // startup code for demo purposes
// insertCard('doing', 'Actually do work', 'some work is being done', 'Nick', 'Research', 5);
// insertCard('todo', 'Do not mess with me', 'make it prettttty', 'Nick', 'Design', 3);
// insertCard('todo', 'Drag/Edit me', 'this is my description', 'Koehler', 'Development', 1);

// // startup code
// updateHeaders();