import { Data } from "@/types";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { ChevronRight } from "lucide-react";

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

const Donate = ({ user }: { user: Data }) => {
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

export default Donate;
