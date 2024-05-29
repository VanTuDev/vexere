import React, { Fragment, useState } from "react";
import { Spin } from "antd";

export default function LoadingSpin() {
    const [isLoadingSpin, setIsLoadingSpin] = useState(false);

    return (
        <Fragment>
            {isLoadingSpin ? (
                <Spin
                    style={{
                        width: "100%",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 99,
                    }}
                />
            ) : (
                ""
            )}
        </Fragment>
    );
}