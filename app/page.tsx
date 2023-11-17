'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

const user = {
  coverImage: 'coverimage.jpg',
  profilePicture: 'profilepicture.jpg',
  name: '勞哥 maylogger',
  bio: 'Vtuber 設計師、我是勞哥，喜歡網頁設計與遊戲！',
}

const donateLevel = [
  {
    amout: '100',
    title: '小額贊助',
    color: 'bg-lime-300',
  },
  {
    amout: '500',
    title: '中額贊助',
    color: 'bg-emerald-300',
  },
  {
    amout: '1,000',
    title: '大額贊助',
    color: 'bg-cyan-300',
  },
  {
    amout: '5,000',
    title: '超大額贊助',
    color: 'bg-fuchsia-300',
  },
  {
    amout: '10,000',
    title: '超級大額贊助',
    color: 'bg-rose-300',
  },
]

const amoutGroup = {
  animate: {
    transition: {
      staggerChildren: 0.075,
    },
  },
}

const amoutItem = {
  init: { opacity: 0 },
  animate: { opacity: 1 },
}

const Profile = () => {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const coverMove = useTransform(scrollY, [0, 100], [0, 50])
  const blur = useTransform(scrollY, [5, 60], ['blur(0px)', 'blur(5px)'])
  const scale = useSpring(useTransform(scrollY, [0, 60], [1, 1.2]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <header className="mb-5">
      <div className="container max-sm:p-0">
        <div className="relative aspect-[620/100] bg-gray-100 dark:bg-gray-900 sm:rounded-b-2xl overflow-hidden bg-cover bg-center">
          <motion.div
            className="absolute inset-0"
            style={{ y: coverMove, filter: blur, scale: scale }}
          >
            <Image
              src={`/${user.coverImage}`}
              fill
              className="object-cover"
              alt={`Cover Image for ${user.name}`}
            />
          </motion.div>
        </div>
        <div className="[--profile-picture-size:128px] flex flex-col items-center  sm:flex-row gap-1 sm:gap-3 px-5 sm:px-10">
          {/* profile picture */}
          <div className=" flex-none w-[--profile-picture-size] h-[--profile-picture-size] relative overflow-hidden rounded-full -mt-3 sm:-mt-[calc(var(--profile-picture-size)/3)] border-4 border-[hsl(var(--background))]">
            <Image
              className="object-cover aspect-square"
              src={`/${user.profilePicture}`}
              fill
              alt={`Cover Image for ${user.name}`}
            />
          </div>
          {/* profile content */}
          <div className="flex-auto flex flex-col justify-center py-1 text-center sm:text-left">
            <h1 className="text-xl font-semibold line-clamp-1">{user.name}</h1>
            <p className="text-sm line-clamp-2 opacity-70 max-sm:mt-1">
              <Balancer>{user.bio}</Balancer>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <>
      <Profile />
      <motion.div
        initial="init"
        animate="animate"
        variants={amoutGroup}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container gap-3 sm:gap-5"
      >
        {donateLevel.map((item, id) => (
          <motion.div
            key={id}
            variants={amoutItem}
            className="rounded-lg sm:rounded-2xl p-3 sm:p-5 sm:first:odd:col-span-2 lg:first:odd:col-span-1 lg:first:odd:row-span-2 relative overflow-hidden group"
          >
            <Link
              href={`/donate/${item.amout}`}
              className="relative h-full z-20 flex items-center justify-between"
            >
              <div>
                <h2 className="text-base sm:text-2xl lg:text-3xl font-semibold">
                  {item.amout}
                </h2>
                <p className="text-sm sm:text-base opacity-70 group-hover:opacity-90">
                  {item.title}
                </p>
              </div>
              <ChevronRight className="[--size:20px] sm:[--size:30px] h-[--size] w-[--size] opacity-20 transition group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
            <div
              className={`absolute rounded-lg sm:rounded-2xl inset-0 z-10 opacity-0 group-hover:opacity-30 
              ring-black/30 dark:ring-white/70 ring-inset ring-4 transition duration-500 pointer-events-none`}
            />
            <div
              className={`absolute rounded-lg sm:rounded-2xl inset-0 z-0 opacity-30 group-hover:opacity-70 group-hover:border dark:group-hover:opacity-50 ${item.color} transition duration-500 pointer-events-none`}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
