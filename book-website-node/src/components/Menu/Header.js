import { NavLink } from "react-router-dom";
import { connect } from "react-redux"


function Header (props) {

    const handleLogout = () => {
        props.onLogout()
        window.location.replace('/login')
    }

    return (
        <div className="nav">
            <h1>Will's Site</h1>
            <div className="nav-links">
                <NavLink to = "/"><div className="link bootstrap-link">Books</div></NavLink>
                <NavLink to = "/add-book"><div className="link bootstrap-link">Add Book</div></NavLink>
                <NavLink to = "/cart"><div className="link bootstrap-link">Cart</div></NavLink>
                {props.isAuthenticated ? <NavLink to = "/my-books"><div className="link bootstrap-link">My Books</div></NavLink> : null}
                {props.isAuthenticated ? <div onClick={handleLogout} className="link bootstrap-link">Logout</div> : <NavLink to ="/login"><div className="link bootstrap-link">Login</div></NavLink>}
            </div>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch({type: 'LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)