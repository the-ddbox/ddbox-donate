import Skeleton from "@/components/user/skeleton";

const Message = ({ text }: { text?: string }) => {
  return (
    <div>
      <Skeleton />
      <div className="container text-center text-2xl">{text}</div>
    </div>
  );
};
export default Message;
