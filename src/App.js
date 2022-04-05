import './App.css';
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import Posts from "./components/posts/Posts";
import {useState} from "react";

function App() {

    const getUser = (user) => {
        setUser(user);
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id);
    }

    let [user, setUser] = useState(null);
    let [userId, setUserId] = useState(null);

    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;