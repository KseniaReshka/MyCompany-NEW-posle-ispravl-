import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, handeleToggleBookMark, id }) => {
    return (
        <button
            onClick={() => {
                console.log(id);
                console.log(status);
                handeleToggleBookMark(id);
            }}
        >
            <i className={"bi bi-bookmark-heart" + (status ? "-fill" : "")}></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    handeleToggleBookMark: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};
export default BookMark;
