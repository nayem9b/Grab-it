import React from "react";
import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Meta } = Card;
const NewsCard = ({ news }) => (
  <div>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <Image src={news.image_url} alt="" height={200} width={200}></Image>
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <div>
        <h1>Comment:{news.comment_count}</h1>
        <Link href={`/news/${news?.id}`}>
          <p>Keep Reading</p>
        </Link>
      </div>
    </Card>
  </div>
);
export default NewsCard;
