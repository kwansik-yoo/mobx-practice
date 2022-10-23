import React, {ChangeEvent, useCallback, useState} from 'react';
import BoardStore, {Board} from "../../store/Board/BoardStore";
import BoardView from "./BoardView";
import {observer} from "mobx-react";

interface Props {
    store: BoardStore;
}

const BoardList = (props: Props) => {
    const {store} = props;
    const handleRegisterButton = useCallback(() => {
        const title = prompt("Title...") || '';
        const content = prompt("Content...") || '';
        const writer = prompt("Writer....") || '';

        store.add({title, content, writer, time: 0})
    }, []);
    const handleRefreshButton = useCallback(() => {
        store.refresh();
    }, []);
    const handleForceUpdateButton = useCallback(() => {
        store.boards.forEach(board => board.title += '_updated');
    }, []);
    const [selected, setSelected] = useState<number|undefined>(undefined);
    const handleSelect = useCallback((_selected: number) => {
        setSelected(_selected)
    }, [])

    const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name as keyof Board;
        if (selected) {
            (store.boards[selected] as any)[name] = value;
        }
    }, [selected]);

    console.log('list rendered...');

    return <div>
        <div>
            <button onClick={handleRegisterButton}>Register</button>
            <button onClick={handleRefreshButton}>Refresh</button>
            <button onClick={handleForceUpdateButton}>ForceUpdate</button>

        </div>
        {
            store.boards.map((board, idx) => <div key={board.title} onClick={() => handleSelect(idx)}>{board.title}</div>)
        }
        <div>
            {
                selected !== undefined && <BoardView board={store.boards[selected]} handleInput={handleInput}/>
            }
        </div>
    </div>
}

// export default BoardList;
// export default React.memo(BoardList);
export default observer(BoardList);
