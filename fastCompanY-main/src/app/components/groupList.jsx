import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    onItemSelect,
    idProperty,
    nameProperty,
    selectedItem
}) => {
    return (
        <ul className="list-group">
            {(Array.isArray(items) ? items : Object.values(items)).map(
                (item) => (
                    <li
                        key={item[idProperty]}
                        className={
                            "list-group-item" +
                            (item === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item[nameProperty]}
                    </li>
                )
            )}
        </ul>
    );
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    idProperty: PropTypes.string.isRequired,
    nameProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object.isRequired
};

export default GroupList;
