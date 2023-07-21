import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import NewsCard from "@/UI/NewsCard";
import { useGetNewsQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";

const HomePage = ({ allNews }) => {
  console.log(allNews);
  const { data, isError, isLoading } = useGetNewsQuery();
  console.log(data);
  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <div className="grid grid-cols-4 gap-10">
        {allNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:8000/news");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       allNews: data,
//     },
//     revalidate: 10,
//   };
// };
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:8000/news");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allNews: data,
    },
  };
};
