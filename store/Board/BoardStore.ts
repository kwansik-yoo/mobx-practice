import {action, autorun, computed, makeObservable, observable} from "mobx";


export type Board = {
    title: string;
    content: string;
    writer: string;
    time: number
}

class BoardStore {
    boards: Board[] = [];

    constructor() {
        makeObservable(this, {
            boards: observable,
            add: action,
            refresh: action,
            count: computed
        })
    }

    add(board: Board) {
        board.time = new Date().getTime();
        // this.boards = [...this.boards, board];
        this.boards.push(board);
    }

    async refresh() {
        await new Promise(r => setTimeout(r, 3000));
        this.boards.push(...[
            {title: 'fetched001', writer: '', content: 'ff', time: 0},
            {title: 'fetched002', writer: '', content: 'ff', time: 0},
            {title: 'fetched003', writer: '', content: 'ff', time: 0},
        ])
    }

    get count() {
        return this.boards.length;
    }

    log() {
        console.log(`${this.count} Boards is registered...`)
    }
}
export default BoardStore;