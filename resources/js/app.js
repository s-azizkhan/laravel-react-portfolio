import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { NextUIProvider } from "@nextui-org/react";
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(_jsx(_Fragment, { children: _jsx(NextUIProvider, { children: _jsx("main", { className: "dark text-foreground bg-background", children: _jsx(App, { ...props }) }) }) }));
    },
    progress: {
        color: '#4B5563',
    },
});
