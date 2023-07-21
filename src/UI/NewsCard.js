import React from "react";
import { Card } from "antd";
import Link from "next/link";
const { Meta } = Card;
const NewsCard = ({ news }) => (
  <div>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
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
