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

  if (!data || data.resultCode !== 200) return <div>Failed to load</div>;
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="space-y-3 sm:space-y-5">
      <Profile user={data.data} />
      <Links link={data.data.links} />
      {/* <Donate donate={data.data.fixedAmounts} /> */}
      <FAQ />
    </div>
  );
}
