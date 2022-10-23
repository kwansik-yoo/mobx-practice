import type {NextPage} from 'next'
import BoardList from "../../components/Board/BoardList";
import BoardStore from "../../store/Board/BoardStore";

const Home: NextPage = () => {
  return (
    <BoardList store={new BoardStore()}/>
  )
}

export default Home
