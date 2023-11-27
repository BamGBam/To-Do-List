
const Game = ({Game, onClear}) =>{
    return(
        <div>
            Owner's name is {Game.player.name}
            <button onClick={onClear}> New Owner is</button>
        </div>
    )

}

export default Game;