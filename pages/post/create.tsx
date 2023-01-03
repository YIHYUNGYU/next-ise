import Link from "next/link";

export default function Post() {
    return (
        <div className="flex justify-center text-center">
            <div className="flex-row bg-midnight">
                <h1 className="text-6xl font-bold underline">
                    Create!
                </h1>
                <div className='my-3'>
                    <Link href='/post'>Post</Link>
                </div>
            </div>
        </div>
    )
}