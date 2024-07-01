import React, { useState, Fragment } from "react";

export default function Loading() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Fragment>
            {isLoading ? (
                <div
                    style={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(255, 255, 255, 0.986)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 99,
                    }}
                >
                    <img
                        src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/media/1df2396f1eaa146bcb7dd3e73c1dc77b.gif"
                        alt="loading"
                    />
                </div>
            ) : (
                " "
            )}
        </Fragment>
    );
}