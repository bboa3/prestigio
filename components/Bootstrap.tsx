"use client";
import React, { useEffect } from "react";

const Bootstrap: React.FC = () => {
    useEffect(() => {
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
        // @ts-ignore
    }, [])

    return <></>
}

export default Bootstrap;