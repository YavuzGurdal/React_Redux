import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFail,
} from "../redux/actions";

// map() ve filter() yeni array olusturur. find ve foreach sadece islem yapar yeni bisey olusturmaz.
function UserHooks() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsersRequest());

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                const users = res.data.map((user) => user.name);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(err => {
                dispatch(fetchUsersFail(err.message));
            });
    }, []);

    return (
        <div>
            {
                userState.error ? <div>Hata var, {userState.error}</div> :
                    userState.loading ? <div>Loading...</div> :
                        userState.users.map((item, index) => <p key={index}>{item}</p>)
            }
        </div>
    );
}

export default UserHooks;
