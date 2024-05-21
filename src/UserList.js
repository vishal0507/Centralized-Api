import React, { useEffect, useState, usestate } from "react";
import { fetchUsers } from '../src/api-info/apiServices';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            }
            catch (error) {
                setError(data);
            }
            finally {
                setLoading(data);
            }
        };
        loadUsers();
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error : {error.message}</div>;
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList;