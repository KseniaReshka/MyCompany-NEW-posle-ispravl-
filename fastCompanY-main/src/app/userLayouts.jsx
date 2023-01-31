import React from "react";
import { useParams, useHistory } from "react-router-dom";
import UserPage from "./components/userPage";
import UserList from "./components/userList";

export const UserLayouts = () => {
    const params = useParams();
    console.log(params);
    const { userId } = params;
    return (
        <div>
            {userId ? (
                <UserPage id={userId} history={useHistory()} />
            ) : (
                <UserList />
            )}
        </div>
    );
};
