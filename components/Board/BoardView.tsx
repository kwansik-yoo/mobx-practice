import React, {ChangeEvent, ChangeEventHandler, useCallback} from 'react';
import {Board} from "../../store/Board/BoardStore";
import {observer} from "mobx-react";


interface Props {
    board: Board
    handleInput?: ChangeEventHandler<HTMLInputElement>
}

const BoardView = (props: Props) => {
    const { board, handleInput } = props;

    console.log('view rendered...');
    return <div>
        <div>
            <input
                type={'text'}
                name={'title'}
                style={{display: 'inline', width: '100px'}}
                value={board.title}
                onChange={handleInput}
            />
            <input
                name={'writer'}
                type={'text'}
                style={{display: 'inline', width: '100px'}}
                value={board.writer}
                onChange={handleInput}
            />
            <div style={{display: 'inline', width: '100px'}}>Date: {board.time}</div>
        </div>
        <div>
            {board.content}
        </div>
    </div>
}

// export default BoardView;
export default observer(BoardView);

