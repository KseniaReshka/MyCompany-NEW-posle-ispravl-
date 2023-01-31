import React, { useState, useEffect } from "react";
import API from "../api";
import PropTypes from "prop-types";

const UserPage = ({ id, history }) => {
    const [userPage, setUserPage] = useState();
    useEffect(() => {
        API.users.getById(id).then((date) => {
            setUserPage(date);
        });
    }, []);
    console.log("userPage", userPage);
    console.log("history", history);
    const handelAllUsers = () => {
        history.push("/users");
    };

    return (
        <div>
            {userPage && (
                <div className="d-flex flex-column flex-shirnk-0 p-3">
                    <h1>{userPage.name}</h1>

                    <ul>
                        {Object.values(userPage.profession).map((prof) => {
                            return <li key={prof}>{prof}</li>;
                        })}
                    </ul>

                    {userPage.qualities.map((qualit) => (
                        <span
                            key={qualit._id}
                            className={`badge bg-${qualit.color}`}
                        >
                            {qualit.name}
                        </span>
                    ))}

                    <h2>{`Оценка ${userPage.rate}`}</h2>

                    <button
                        className="btn btn-secondary mt-2"
                        onClick={() => {
                            handelAllUsers();
                        }}
                    >
                        Все пользователи
                    </button>
                </div>
            )}
        </div>
    );
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
};

export default UserPage;
