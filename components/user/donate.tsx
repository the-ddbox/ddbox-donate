import { FixedAmount, DataType } from "@/types";

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

const Donate = ({
  user,
  donateLevel,
}: {
  user: DataType;
  donateLevel: FixedAmount[];
}) => {
  return (
    <motion.div
      initial="init"
      animate="animate"
      variants={amoutGroup}
      className="container grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
    >
      {donateLevel.map((item, id) => (
        <motion.div key={id} variants={amoutItem}>
          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative z-20 flex h-full w-full items-center justify-between overflow-hidden rounded-lg p-3 text-left sm:rounded-2xl sm:p-5 sm:first:odd:col-span-2 lg:first:odd:col-span-1 lg:first:odd:row-span-2">
                <div>
                  <h2 className="text-base font-semibold sm:text-2xl lg:text-3xl">
                    {item.money}
                  </h2>
                  <p className="text-sm opacity-70 group-hover:opacity-90 sm:text-base">
                    {item.name}
                  </p>
                </div>
                <ChevronRight className="h-[--size] w-[--size] opacity-20 transition [--size:20px] group-hover:translate-x-1 group-hover:opacity-100 sm:[--size:30px]" />
              </button>
            </DialogTrigger>

            <DialogContent className="max-h-[calc(100vh-var(--margin)*2)] overflow-y-auto [--margin:20px]">
              <DialogHeader>
                <DialogTitle>確認贊助細節</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <h2 className="rounded-lg bg-slate-100 p-5 text-center dark:bg-slate-900">
                  <span className="text-sm">贊助{user.name}</span>
                  <br />
                  <span className="font-bold">
                    <span className="text-3xl font-medium">
                      NT${item.money}
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
                <div className="grid w-full gap-3 sm:grid-cols-2">
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
            className={`pointer-events-none absolute inset-0 z-10 rounded-lg opacity-0 ring-4 
                ring-inset ring-black/30 transition duration-500 group-hover:opacity-30 dark:ring-white/70 sm:rounded-2xl`}
          />
          <div
            className={`absolute inset-0 z-0 rounded-lg opacity-30 group-hover:border group-hover:opacity-70 dark:group-hover:opacity-50 sm:rounded-2xl ${item.color} pointer-events-none transition duration-500`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Donate;
