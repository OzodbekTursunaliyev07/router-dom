import { Outlet } from "react-router-dom"
function ArticlesLayout() {
  return (
    <div>
        <h2>My articles</h2>
        <hr />
        <Outlet/>
    </div>
  )
}

export default ArticlesLayout