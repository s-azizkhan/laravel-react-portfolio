import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Head } from '@inertiajs/react';
import { LandingComponent } from './Home/landing-component';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (_jsxs(_Fragment, { children: [_jsx(Head, { title: "S.Aziz Khan" }), _jsx(LandingComponent, {})] }));
}
