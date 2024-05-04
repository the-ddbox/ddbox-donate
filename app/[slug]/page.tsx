"use client";
import useSWR from "swr";
import Profile from "@/components/user/profile";
import Links from "@/components/user/links";
import Donate from "@/components/user/donate";
import FAQ from "@/components/user/faq";

export default function Home({ params }: { params: { slug: string } }) {
  const apiUrl = `https://peer.theddbox.com/api/v1/donate/web/${params.slug}`;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(apiUrl, fetcher);

  if (!data) return <div>Loading...</div>;
  if (!data || !data.success) return <div>使用者不存在</div>;
  if (error) return <div>Failed to load</div>;

  return (
    <div className="space-y-3 sm:space-y-5">
      <Profile user={data.data} />
      <Links links={data.data.links} />
      <Donate user={data.data} donateLevel={data.data.fixedAmounts} />
      <FAQ />
    </div>
  );
}
