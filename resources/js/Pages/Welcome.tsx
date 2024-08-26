import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { LandingComponent } from "./Home/landing-component";

export default function Welcome({ projects }: PageProps<{ projects: any }>) {
    return (
        <>
            <Head title="S.Aziz Khan" />
            <LandingComponent />
        </>
    );
}
