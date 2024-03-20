"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Balancer from "react-wrap-balancer";
import {
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const user = {
  coverImage: "coverimage.jpg",
  profilePicture: "profilepicture.jpg",
  name: "勞哥 maylogger",
  bio: "Vtuber 設計師、我是勞哥，喜歡網頁設計與遊戲！",
  links: [
    {
      title: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/maylogger.vtuber",
    },
    {
      title: "Twitter",
      icon: FaXTwitter,
      url: "https://twitter.com/may_logger",
    },
    {
      title: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@maylogger",
    },
    {
      title: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/maylogger.vtuber",
    },
    {
      title: "Website",
      icon: FaGlobe,
      url: "https://maylogger.com/",
    },
  ],
};

const donatePlatform = [
  {
    title: "綠界",
    color: "#22c55e",
  },
  {
    title: "歐付寶",
    color: "#00a2e8",
  },
  {
    title: "藍新",
    color: "#0e7490",
  },
  {
    title: "街口",
    color: "#e11d48",
  },
  {
    title: "Paypal",
    color: "#009cde",
  },
  {
    title: "統一支",
    color: "#f43f5e",
  },
  {
    title: "玉山",
    color: "#14b8a6",
  },
  {
    title: "國泰",
    color: "#f68d2e",
  },
  {
    title: "橘子支",
    color: "#f97316",
  },
  {
    title: "LINE PAY",
    color: "#22c55e",
  },
  {
    title: "TAIWAN PAY",
    color: "#009cde",
  },
];

const donateLevel = [
  {
    amout: "100",
    title: "小額贊助",
    color: "bg-lime-300",
  },
  {
    amout: "500",
    title: "中額贊助",
    color: "bg-emerald-300",
  },
  {
    amout: "1,000",
    title: "大額贊助",
    color: "bg-cyan-300",
  },
  {
    amout: "5,000",
    title: "超大額贊助",
    color: "bg-fuchsia-300",
  },
  {
    amout: "10,000",
    title: "超級大額贊助",
    color: "bg-rose-300",
  },
];

const amoutGroup = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const amoutItem = {
  init: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const Profile = () => {
  const ref = useRef(null);
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
  );
};

const Links = () => {
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row justify-center rounded-lg sm:rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900">
        {user.links.map((item, id) => (
          <Link
            key={id}
            href={item.url}
            target="_blank"
            className="sm:grow flex-1 flex items-center justify-center gap-2 py-2 sm:py-4 hover:bg-gray-200/40 dark:hover:bg-gray-700 transition"
          >
            <item.icon
              className="
                [--icon-size:16px]
                sm:max-lg:[--icon-size:12px]
                w-[--icon-size] h-[--icon-size]
                "
            />
            <span className="text-sm sm:max-lg:text-xs">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "這是什麼樣的系統？",
      answer:
        "這是 DDBOX 新型簡約設計的贊助系統，可以對接多種支付方式。未來還可以連線 DDBOX 其餘的系統服務。",
    },
    {
      question: "這個系統需要付費嗎？",
      answer:
        "DDBOX 的系統有基本功能免費使用，欲使用進階功能可以訂閱 DDBOX 的服務進行使用。",
    },
    {
      question: "DDBOX 支援哪些金流服務？",
      answer:
        "綠界、歐付寶、藍新、統一金流、與特殊的第三方支付單位，未來會新增更多的金流服務。",
    },
    {
      question: "除了基本贊助還有哪些功能？",
      answer:
        "額外的後台數據分析，監控儀表板，歷史紀錄查詢，連動其他系統功能。",
    },
    {
      question: "後台可以一站式登入嗎？",
      answer: "可以的，我們的系統都支援一站式登入，關聯其餘系統作業。",
    },
    {
      question: "如何申請使用？",
      answer: "可以聯絡 contact@theddbox.com 聯絡客服與我們洽詢相關系統試用。",
    },
  ];
  return (
    <div className="container">
      <Accordion
        type="multiple"
        className="bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-2xl overflow-hidden"
      >
        {faqData.map((item, id) => (
          <AccordionItem
            key={id}
            value={item.question}
            className="hover:bg-gray-200/40 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 dark:border-gray-700/80 border-b border-gray-200/40 transition duration-200 text-sm
            max-sm:text-sm"
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const Donate = () => {
  return (
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
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative w-full text-left h-full z-20 flex items-center justify-between">
                <div>
                  <h2 className="text-base sm:text-2xl lg:text-3xl font-semibold">
                    {item.amout}
                  </h2>
                  <p className="text-sm sm:text-base opacity-70 group-hover:opacity-90">
                    {item.title}
                  </p>
                </div>
                <ChevronRight className="[--size:20px] sm:[--size:30px] h-[--size] w-[--size] opacity-20 transition group-hover:opacity-100 group-hover:translate-x-1" />
              </button>
            </DialogTrigger>

            <DialogContent className="[--margin:20px] overflow-y-auto max-h-[calc(100vh-var(--margin)*2)]">
              <DialogHeader>
                <DialogTitle>確認贊助細節</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <h2 className="text-center bg-slate-100 dark:bg-slate-900 rounded-lg p-5">
                  <span className="text-sm">贊助{user.name}</span>
                  <br />
                  <span className="font-bold">
                    <span className="text-3xl font-medium">
                      NT${item.amout}
                    </span>{" "}
                    元
                  </span>
                </h2>
                <Input
                  id="name"
                  placeholder="請輸入您的姓名"
                  className="col-span-3"
                />
                <Textarea rows={5} id="message" placeholder="請輸入您的留言" />
              </div>
              <DialogDescription>
                <Label>請選擇要使用什麼金流贊助？</Label>
              </DialogDescription>
              <DialogFooter>
                <div className="grid sm:grid-cols-2 gap-3 w-full">
                  {donatePlatform.map((platform, id) => (
                    <Button
                      key={id}
                      style={{ backgroundColor: platform.color }}
                      className="text-white"
                    >
                      {platform.title}
                    </Button>
                  ))}
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
  );
};

const Api = () => {
  useEffect(() => {
      fetch("http://10.0.1.237:57700/api/v1/donate/web/AA")
      .then((res) => res.json())
      .then((data) => {
        //user
        user.coverImage = data.data.coverUrl
        user.profilePicture = data.data.avatarUrl
        user.name = data.data.name
        user.bio = data.data.description
        user.links = data.data.links

        // donatePlatform.map(data.data.donatePlatform.map( it=> {
        //   return {
        //      'title': it.valuel,
        //      'color': it.labell,
        //    }
        // }));
        // donateLevel.map(data.data.fixedAmounts)
        console.log(data);
      })},[])
}

export default function Home() {
  Api()
  return (
    <div className="space-y-3 sm:space-y-5">
      <Profile />
      <Links />
      <Donate />
      <FAQ />
    </div>
  );
}
