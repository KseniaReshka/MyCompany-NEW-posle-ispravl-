import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    handeleDelete,
    handeleToggleBookMark
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map((qualit) => {
                    return <Qualitie key={qualit._id} {...qualit} />;
                })}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => handeleDelete(_id)}
                >
                    delete
                </button>
            </td>
            <td>
                <BookMark
                    status={bookmark}
                    handeleToggleBookMark={handeleToggleBookMark}
                    id={_id}
                />
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    handeleDelete: PropTypes.func.isRequired,
    handeleToggleBookMark: PropTypes.func.isRequired
};
export default User;
