import React, { Suspense } from "react";
import Spinner from "../spinner/Spinner"
import HomePage from "../headerpages/HomePage";
import ErrorPage from "../errorpage/ErrorPage"
const VideoUpload = React.lazy(() => import("../headerpages/VideoUpload"));

export const RouteComps = [
    {
        element: (
            <Suspense fallback={<Spinner />}>
                <HomePage />
            </Suspense>
        ),
        path: "",
        isPrivate: false,
        isVisibleAfterLogin: true,
        role: []
    },

    {
        element: (
            <Suspense fallback={<Spinner />}>
                <VideoUpload />
            </Suspense>
        ),
        path: "video-upload",
        isPrivate: false,
        isVisibleAfterLogin: true,
        role: []
    },





    {
        element: (
            <Suspense fallback={<Spinner />}>
                <ErrorPage />
            </Suspense>
        ),
        path: "*",
        isPrivate: false,
        isVisibleAfterLogin: true,
        role: []
    },

]