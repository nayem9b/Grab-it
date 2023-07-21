import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";

const NewsDetailsPage = ({ singleNews }) => {
  return (
    <div>
      <h1>{singleNews?.title}</h1>
      <h1>{singleNews?.id}</h1>
    </div>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:8000/news`);
  const news = await res.json();
  const paths = news.map((news) => ({
    params: { newsId: news.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:8000/news/${params.newsId}`);
  const data = await res.json();

  return {
    props: {
      singleNews: data,
    },
  };
};
