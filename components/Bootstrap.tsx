"use client";
import React, { useEffect } from "react";

const Bootstrap: React.FC = () => {
    useEffect(() => {
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
        // @ts-ignore
        import('@assets/js/main.js');
    }, [])

    return <></>
}

export default Bootstrap;