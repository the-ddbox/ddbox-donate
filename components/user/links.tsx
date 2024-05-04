import Link from "next/link";
import { LinkType } from "@/types";

import {
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaGlobe,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";

const Icon = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "Facebook":
      return <FaFacebook className={className} />;
    case "X":
      return <FaXTwitter className={className} />;
    case "YouTube":
      return <FaYoutube className={className} />;
    case "Discord":
      return <FaDiscord className={className} />;
    case "Instagram":
      return <FaInstagram className={className} />;
    default:
      return <FaGlobe className={className} />;
  }
};

const Links = ({ link }: { link: LinkType }) => {
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row justify-center rounded-lg sm:rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900">
        {link.map((link, id) => (
          <Link
            key={id}
            href={link.url}
            target="_blank"
            className="sm:grow flex-1 flex items-center justify-center gap-2 py-2 sm:py-4 hover:bg-gray-200/40 dark:hover:bg-gray-700 transition"
          >
            <Icon
              name={link.name}
              className="
                  [--icon-size:16px]
                  sm:max-lg:[--icon-size:12px]
                  w-[--icon-size] h-[--icon-size]
                  "
            />
            <span className="text-sm sm:max-lg:text-xs">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
