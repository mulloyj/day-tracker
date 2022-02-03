import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
    return <Layout>
            <h1 className="flex shrink-0 p-6 max-w-sm mx-auto">Home page</h1>
            <h2 className="flex shrink-0 p-6 max-w-sm mx-auto text-lime-500 hover:text-lime-200 hover:underline">
                <Link href="/add">Add a Day</Link>
            </h2>
        </Layout>
}