import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default FAQ;
