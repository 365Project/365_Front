import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import "../../styles/Login.css";

function Logout() {
    const history = useHistory();
    const [loading] = useState(true);
    useEffect(() => {
        const token = sessionStorage.getItem("token") || null;
        if (loading) {
            setTimeout(() => {
                history.push("/365");
            }, 1000);
        }

        axios
            .get(`${process.env.REACT_APP_SERVER_IP}/logout?token=${token}`)
            .then(function (res) {
                if (res.status === 200 && res.data.msg) {
                    sessionStorage.clear();
                }
            })
            .catch(function (err) {
                console.error(err);
                alert("로그아웃에 실패하였습니다.");
            });
    }, [history, loading]);

    return (
        <div
            style={{
                height: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <PulseLoader height="160" width="32" color="#36D7B7" radius="8" />
        </div>
    );
}

export default Logout;
