"use client"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import { Search } from "lucide-react"
import Image from "next/image"

function Header() {
    const { user, isSignedIn } = useUser()
    return (
        <div className="flex justify-between items-center p-6 md:px-20 shadow-md ">
            <Image src='/logo1.png' alt="logo" width={200} height={200} />
            <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
                <input type="text" className="w-full bg-transparent outline-none" />
                <Search />

            </div>
            {
                isSignedIn ? <UserButton /> : <div className="flex gap-5">
                    <SignInButton mode="modal">
                        <Button variant="outline">Login</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button>Signup</Button>
                    </SignUpButton>
                </div>
            }
        </div>
    )
}

export default Header