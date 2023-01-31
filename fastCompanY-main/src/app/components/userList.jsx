import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import _ from "lodash";
import API from "../api";

const UserList = () => {
    const [corentPage, setCorentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState([
        { iter: "name", order: "asc", caret: false }
    ]);
    const [users, setUsers] = useState();
    const pageSize = 8;
    console.log("selectedProf", selectedProf);

    useEffect(() => {
        API.users.fetchAll().then((date) => {
            setUsers(date);
        });
    }, []);
    useEffect(() => {
        API.professions.fetchAll().then((date) => {
            setProfession(date);
        });
    });

    useEffect(() => {
        console.log(professions);
    }, [professions]);
    useEffect(() => {
        setCorentPage(1);
    }, [selectedProf]);

    const handeleDelete = (userId) => {
        setUsers(users.filter((el) => el._id !== userId));
    };

    const handeleToggleBookMark = (id) => {
        setUsers(
            users.map((obj) => {
                if (obj._id === id) {
                    return { ...obj, bookmark: !obj.bookmark };
                }
                return obj;
            })
        );
    };

    const handlePageChange = (pageIndex) => {
        // console.log("page", pageIndex);
        setCorentPage(pageIndex);
    };

    const clearFilter = () => {
        setSelectedProf();
    };

    const handeleSort = (item) => {
        setSortBy(item);
    };
    const handelProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(
                  (user) =>
                      JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
              )
            : users;
        const count = filteredUsers.length;

        const sortedUsers = _.orderBy(filteredUsers, sortBy.path, sortBy.order);

        const userCrop = paginate(sortedUsers, corentPage, pageSize);

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shirnk-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handelProfessionSelect}
                            idProperty="_id"
                            nameProperty="name"
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    {count > 0 ? (
                        <UserTable
                            users={userCrop}
                            onSort={handeleSort}
                            selectedSort={sortBy}
                            handeleDelete={handeleDelete}
                            handeleToggleBookMark={handeleToggleBookMark}
                        />
                    ) : (
                        "ничего"
                    )}
                    <div className="d-flex jystify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            corentPage={corentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "loading";
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;
