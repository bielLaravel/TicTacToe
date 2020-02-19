$(document).ready(function () {
    let player = 'O'
    const columns = 3;
    let maxOpcions =3;
    const row = 3;
    $('body').attr('style', 'background-color: antiquewhite;');

    createGame(columns, row, player);
    
    $(document).on('click', '.quadrat', function () {
         checkIfGameIsOver(player,maxOpcions);
        //Check if the button is already press
        if ($(this).val() !== '-') return 1;
        else {
            $(this).val(player);    
            $(this).addClass('click' + player);
        
            player = (player.endsWith('O')) ? 'X' : 'O';
            //Change the value of the div PlayerTurn
            changePlayerTurn(player);
        }
    })
    //We restart the game
    $(document).on('click', '#reset', function () {
        resetTheGame();
    })
})
createGame = (columns,row,player) => {
    for (let i = 1; i <= columns; i++) {
        for (let j = 1; j <= row; j++) {
            $('#board').append("<input id='"+i+j+"'  class='quadrat btn  btn-lg m-2 ' type='button' value='-'/>");
        }     
        $('#board').append('<br>')
    }

    let playerInfo = createElementsWithText('div', 'mt-2', 'playerTurn', `The player is:  ${player}`);
    $('#board').append(playerInfo);
    
    let titleGame = createElementsWithText('h1', 'mt-2', 'titleGame', 'TIC TAC TOE');
    $('#board').prepend(titleGame);
    
    let inputToReset = createElementsWithOutText('input', 'inputReset btn', 'reset', 'Restart the game');
    $(inputToReset).insertAfter('#board');
}


changePlayerTurn = (player) => {
    $('#playerTurn').text(`The player is: ${player}`)
}

//Create an elemnt that doesn't need text
createElementsWithOutText = (element, classToAdd, idToAdd,valueToAdd) => {
    let elementToCreate = document.createElement(element);
    elementToCreate.setAttribute('class', classToAdd);
    elementToCreate.setAttribute('id', idToAdd);
    elementToCreate.setAttribute('value', valueToAdd);

    return elementToCreate;
}
//Create an elemnt that need text
createElementsWithText = (element, classToAdd, idToAdd,textToAdd) => {
    let title = document.createElement(element);
    title.setAttribute('class', classToAdd);
    title.setAttribute('id', idToAdd);
    
    let text = document.createTextNode(textToAdd);
    title.append(text);

    return title;
}
//Reset the game
resetTheGame = () => {
    $('.quadrat').val('-');
    $('.quadrat').removeClass('clickO');
    $('.quadrat').removeClass('clickX')
}



checkIfGameIsOver = (player, maxOpcions) => {

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
        
            diagonal = 0;
            totalPlayer = 1;

            $('.quadrat').each(function (index) {
                let thisQuadrat = $(this).attr('id');
                
                if ((thisQuadrat.charAt(1) == thisQuadrat.charAt(0)) && ($(this).val() == player)) {
                    totalPlayer++;
                    if (totalPlayer == 3) alert("has juanyat");
                }
                
                
               
            })       
        }
    }

}