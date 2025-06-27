"use client";

import styles from "../page.module.css";

export const CallAPIButton = () => {
    const fetchUserData = async () => {
        const userInfoResponse = await fetch("http://localhost:5000/api/auth/user");

        alert(JSON.stringify(await userInfoResponse.json()));
    };

    return (
        <div onClick={fetchUserData} className={styles.sessionButton}>
            Call API
        </div>
    );
};
