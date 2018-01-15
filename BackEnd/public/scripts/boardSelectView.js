var numBoards = 0;

function getValue(id) {
    if(id == null) return;
    var v = document.getElementById(id).value;
    return v;
}
function isEmpty(s) {
    return s.trim().length == 0;
}

function createBoard(boardTitle) {
	if(isEmpty(boardTitle))
		return;
	$('#add-board-modal').modal('hide');
	$('#board-title').val('');
	const windowTokens = window.location.href.split("/");
	$.post("/api/users/projects/" + windowTokens[windowTokens.length - 2] + "/boards/create", {boardTitle: boardTitle}, (data) => {
		// console.log(data);
		var addBoard = document.getElementById('add-board-item');
		var ab = addBoard.parentElement;
		// console.log(addBoard);
		var abp = addBoard.parentElement.parentElement;
		$(abp).html('');
		$(abp).append(ab);
		// addBoard.parentElement.parentElement.removeAttribute("id");
		// addBoard.parentElement.removeAttribute("id");
		// addBoard.id = "temporary";
		// while (addBoard.parentElement.children.length > 1) {
		// 	let i = 0;
		// 	let a = addBoard.parentElement.children[i];
		// 	if (a.id !== "temporary") {
		// 		addBoard.parentNode.removeChild(a);
		// 		i = 0;
		// 	} else {
		// 		i++;
		// 	}
		// }
		addBoard.parentElement.id = "last-board";
		data["TaskBoards"].map(board => {
			// console.log(board);
			insertBoard(board["TaskBoardName"], windowTokens[windowTokens.length - 2], board["TaskBoardID"]);
		})
		$(ab).appendTo(abp);
	})
	// insertBoard(boardTitle);
}

function insertBoard(boardTitle, pID, bID) {
	numBoards++;
	var lastBoard = document.getElementById('last-board');
	var newBoard = '<div class="col-3 board-selection-container" data-boardName="board-item-' + numBoards +'" id="last-board"><a href="/' + pID +  '/boards/' + bID + '" class="btn btn-primary btn-lg btn-block board-item" role="button">' + boardTitle + '</a></div>';
	lastBoard.removeAttribute("id");

	if(numBoards <= 1) {
		lastBoard.insertAdjacentHTML('beforebegin', newBoard);
	} else {
		lastBoard.insertAdjacentHTML('afterend', newBoard);
	}
}

/* Insert Test Data */
// insertBoard("Board 1");
// insertBoard("Board 2");
// insertBoard("Board 3");
// insertBoard("Board 4");
$(document).ready(() => {
	const windowTokens = window.location.href.split("/");
	$.get("/api/users/projects/" + windowTokens[windowTokens.length - 2], (data) => {
		// console.log(data)
		data["TaskBoards"].map(board => {
			// console.log(board);
			insertBoard(board["TaskBoardName"], windowTokens[windowTokens.length - 2], board["TaskBoardID"]);
		})
	})
})