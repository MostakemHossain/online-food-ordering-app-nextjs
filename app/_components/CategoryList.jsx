"use client"
import { ArrowRightCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import globalApi from "../_utils/globalApi"

function CategoryList() {
    const listRef = useRef(null)
    const params = useSearchParams()
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    useEffect(() => {
        setSelectedCategory(params.get('category'))
    }, [params])
    useEffect(() => {
        getCategoryList()
    }, [])
    const getCategoryList = () => {
        globalApi.getCategory().then(resp => {
            setCategoryList(resp.categories)
        })
    }
    const ScrollRightHandler = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className="mt-10 relative">
            <div className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
                {
                    categoryList && categoryList.map((category, index) => (
                        <Link href={'?category=' + category.slug} key={index} className={`flex flex-col items-center gap-2 border p-4 rounded-xl min-w-36 hover:border-primary hover:bg-orange-50 cursor-pointer group ${selectedCategory == category.slug && "text-primary border-primary bg-orange-50"}`}>
                            <Image src={category.icon?.url} alt={category.name} width={40}
                                height={40}
                                className="group-hover:scale-125 transition-all duration-200"
                            />
                            <h2 className="text-sm font-medium group-hover:text-primary">{category.name}</h2>

                        </Link>
                    ))
                }

            </div>
            <ArrowRightCircle onClick={() => ScrollRightHandler()} className="absolute top-9 -right-10 bg-gray-500 rounded-full text-white w-8 h-8 cursor-pointer" />
        </div>

    )
}

export default CategoryList