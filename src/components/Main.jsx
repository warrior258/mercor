import Todo from "./Todo"
import Done from "./Done"
import Progress from "./Progress"

const Main = () => {

  return (
    <div className="px-10 flex xl:flex-row flex-col items-start justify-between gap-5 mb-4">
      <Todo/>
      <Progress/>
      <Done/>
    </div>
  )
}

export default Main