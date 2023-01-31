import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const getsearchStatus = (num) => {
        if (num >= 2 && num <= 4) {
            return (
                <>
                    <h2 className="badge bg-primary">{`${num} человека тусует с тобой сегодня`}</h2>
                </>
            );
        } else if (!num) {
            return (
                <>
                    <h2 className="badge bg-danger">{`${num} человек тусует с тобой сегодня`}</h2>
                </>
            );
        } else {
            return (
                <>
                    <h2 className="badge bg-primary">{`${num} человек тусует с тобой сегодня`}</h2>
                </>
            );
        }
    };
    return <div>{getsearchStatus(length)}</div>;
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
