var numBoards = 4;

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
	insertBoard(boardTitle);
}

function insertBoard(boardTitle) {
	numBoards++;
	var lastBoard = document.getElementById('last-board');
	//// console.log(lastBoard);
	var newBoard = '<div class="col-3 board-section-container" data-boardName="board-item-' + numBoards +'" id="last-board"><a href="#" class="btn btn-primary btn-lg btn-block board-item" role="button">' + boardTitle + '</a></div>';
	lastBoard.removeAttribute("id");
	lastBoard.insertAdjacentHTML('afterend', newBoard);
}
