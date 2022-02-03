import React from "react";
import Head from 'next/head';

export const siteTitle = 'Day Tracker';

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div>
            <Head>
                <meta 
                    name="description"
                    content="App to track the quality of days"
                />
                <title>{siteTitle}</title> 
            </Head>
            <main>
                <div className="w-screen h-screen bg-neutral-900 font-mono text-lime-300">
                    {children}
                </div>
            </main>
        </div>
    );
}