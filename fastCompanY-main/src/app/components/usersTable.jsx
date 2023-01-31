import React from "react";
import PropTypes from "prop-types";
// import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitilList from "./qualitisList";
import Table from "./table";

const UserTable = ({
    users,
    onSort,
    selectedSort,
    handeleToggleBookMark,
    handeleDelete,
    ...rest
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            tabl: true
        },
        qalities: {
            name: "Качесва",
            component: (user) => <QualitilList qualities={user.qualities} />
        },
        profession: {
            path: "profession.name",
            name: "Профессия"
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: " Оценка" },
        bookmark: {
            path: "bookmark",
            name: "  Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => handeleToggleBookMark(user._id)}
                    id={user._id}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger"
                    onClick={() => handeleDelete(user._id)}
                >
                    delete
                </button>
            )
        }
    };

    return (
        // <Table>
        //     <TableHeader {...{ onSort, selectedSort, columns }} />
        //     <TableBody {...{ data: users, columns }} />
        // </Table>
        <Table {...{ onSort, selectedSort, columns, data: users }} />
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    handeleToggleBookMark: PropTypes.func.isRequired,
    handeleDelete: PropTypes.func.isRequired
};
export default UserTable;
