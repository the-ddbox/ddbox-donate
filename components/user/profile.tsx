import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { DataType } from "@/types";

const Profile = ({ user }: { user: DataType }) => {
  const { scrollY } = useScroll();
  const coverMove = useTransform(scrollY, [0, 100], [0, 50]);
  const blur = useTransform(scrollY, [5, 60], ["blur(0px)", "blur(5px)"]);
  const scale = useSpring(useTransform(scrollY, [0, 60], [1, 1.2]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="mb-5">
      <div className="container max-sm:p-0">
        <div className="relative aspect-[360/100] sm:aspect-[620/100] bg-gray-100 dark:bg-gray-900 sm:rounded-b-2xl overflow-hidden bg-cover bg-center">
          <motion.div
            className="absolute inset-0"
            style={{ y: coverMove, filter: blur, scale: scale }}
          >
            <Image
              src={`${user.coverUrl}`}
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
              src={`${user.avatarUrl}`}
              fill
              alt={`Cover Image for ${user.name}`}
            />
          </div>
          {/* profile content */}
          <div className="flex-auto flex flex-col justify-center py-1 text-center sm:text-left">
            <h1 className="text-xl font-semibold line-clamp-1">{user.name}</h1>
            <p className="text-sm line-clamp-2 opacity-70 max-sm:mt-1">
              <Balancer>{user.description}</Balancer>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Profile;
