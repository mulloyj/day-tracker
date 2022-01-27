import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
    return <Layout>
            <h1 className="flex shrink-0 p-6 max-w-sm mx-auto">Home page</h1>
            <h2 className="flex shrink-0 p-6 max-w-sm mx-auto">
                <Link href="/tracker/add">Add a Day</Link>
            </h2>
        </Layout>
}