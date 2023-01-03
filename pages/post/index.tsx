import Link from "next/link";

export default function Post() {
    return (
        <div className="flex justify-center text-center">
            <div className="flex-row">
                <h1 className="text-6xl font-bold underline">
                    Bye world!
                </h1>
                <div className='my-3'>
                    <Link href='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}