import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { LandingComponent } from './Home/landing-component';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    return (
        <>
            <Head title="S.Aziz Khan" />
            <LandingComponent />
        </>
    );
}
