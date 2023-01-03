import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function WebLayout({ children }: Props) {
    return (
        <div className='justify-center text-center h-screen'>
            <h1 className='text-4xl bg-fuchsia-100 h-1/6'>Header</h1>
            <main className='flex flex-col h-4/6 justify-center items-center'>{children}</main>
            <h1 className='text-4xl bg-fuchsia-100 h-1/6'>Footer</h1>
        </div>
    )
}