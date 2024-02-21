// src/components/ViewProfile.js
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const ViewProfile = ({ }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const storedUserData = localStorage.getItem('userData');

        if (!storedUserData) {
            console.error('User data not found');
            return;
        }

        const user = JSON.parse(storedUserData);

        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token') || sessionStorage.getItem('token');

                if (!token) {
                    console.error('Token not found');
                    return;
                }

                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                // Sử dụng template literals để thêm user.id vào đường dẫn API
                const response = await axios.get(`http://localhost:8080/api/users/${user.id}`, config);

                setUserData(response.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error.response.data.message);
            }
        };

        fetchUserData();
    }, []); // User.id không được sử dụng ở đây
    return (
        <div>
            {userData ? (
                <div>
                    <h2>User Profile</h2>
                    <p>Name: {userData.name}</p>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    {/* Hiển thị các thông tin khác của người dùng */}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default ViewProfile;
