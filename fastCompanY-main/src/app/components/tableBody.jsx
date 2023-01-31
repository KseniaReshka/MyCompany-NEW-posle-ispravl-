import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Link, Switch, Route } from "react-router-dom";
import UserPage from "./userPage";

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].tabl) {
            return (
                <div>
                    <Link to={`/users/${item._id}`}>{item.name}</Link>
                    <Switch>
                        <Route
                            path={`/users/${item._id}`}
                            render={() => <UserPage id={item._id} />}
                        />
                    </Switch>
                </div>
            );
        }
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        // if (!columns[column].tabl) {
        return _.get(item, columns[column].path);
    };

    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableBody;
