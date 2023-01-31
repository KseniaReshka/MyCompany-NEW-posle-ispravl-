import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const QualitilList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qualit) => {
                return <Qualitie key={qualit._id} {...qualit} />;
            })}
        </>
    );
};
QualitilList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitilList;
