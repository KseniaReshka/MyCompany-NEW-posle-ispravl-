import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handeleCaret = (item) => {
        if (selectedSort.path === item) {
            if (selectedSort.order === "asc") {
                return (
                    <>
                        <i className={"bi bi-caret-up-fill"}></i>
                    </>
                );
            } else {
                return (
                    <>
                        <i className={"bi bi-caret-down-fill"}></i>
                    </>
                );
            }
        } else {
            return null;
        }
    };

    const handeleSort = (item) => {
        if (selectedSort.path === item) {
            onSort((selectedSort) => ({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            }));
        } else {
            onSort({ path: item, order: "asc" });
            console.log("item", item);
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((colun) => (
                    <th
                        key={colun}
                        onClick={
                            columns[colun].path
                                ? () => {
                                      handeleSort(columns[colun].path);
                                  }
                                : undefined
                        }
                        {...{ role: columns[colun].path && "button" }}
                        scope="col"
                    >
                        {columns[colun].name}
                        {handeleCaret(columns[colun].path)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
