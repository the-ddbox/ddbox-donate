import Image from 'next/image'
import ProfilePicture from '@/public/profilepicture.jpg'
import CoverImage from '@/public/coverimage.jpg'

const user = {
  coverImage: CoverImage,
  profilePicture: ProfilePicture,
  name: '勞哥 maylogger',
  bio: 'Vtuber 設計師、我是勞哥，喜歡網頁設計與遊戲！',
}

const Header = () => {
  return (
    <header className="mb-5">
      <div className="container">
        <div className="aspect-[1665/270] relative rounded-lg sm:rounded-2xl overflow-hidden">
          <Image
            className="object-cover"
            src={user.coverImage}
            placeholder="blur"
            fill
            alt={`Cover Image for ${user.name}`}
          />
        </div>
        <div className="[--profile-picture-size:64px] sm:[--profile-picture-size:128px] flex gap-1 sm:gap-3 px-5 sm:px-10">
          {/* profile picture */}
          <div className=" flex-none w-[--profile-picture-size] h-[--profile-picture-size] relative overflow-hidden rounded-full -mt-[calc(var(--profile-picture-size)/3)] border-4 border-[hsl(var(--background))]">
            <Image
              className="object-cover aspect-square"
              src={user.profilePicture}
              fill
              placeholder="blur"
              alt={`Cover Image for ${user.name}`}
            />
          </div>
          {/* profile content */}
          <div className="flex-auto flex flex-col justify-center py-1">
            <h1 className="sm:text-xl font-semibold line-clamp-1">
              {user.name}
            </h1>
            <p className="text-xs sm:text-sm line-clamp-2 opacity-70">
              {user.bio}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
