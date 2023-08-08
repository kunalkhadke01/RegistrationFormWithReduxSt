import './sidebar.css'
import { Link, Outlet } from "react-router-dom"

const Sidebar = (props) => {
  console.log(props)

  return (
    <main class="main">
      <aside class="sidebar">
        <nav class="nav">
          <ul>
            <Link to='/sidebar/profile'>
              <li class="active">Pofile</li>
            </Link>
            <Link to='/sidebar/post'>
              <li>Post</li>
            </Link>
            <Link to='/sidebar/gallary'>
              <li>Gallary</li>
            </Link>
            <Link to='/sidebar/todo'>
              <li>Todo</li>
            </Link>
          </ul>
        </nav>
      </aside>

      <section class="twitter">
        <div class="container">
          <Outlet/>
        </div>
      </section>
    </main>
  )
}

export default Sidebar;