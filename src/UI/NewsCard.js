import React from "react";
import { Card } from "antd";
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
      </div>
    </Card>
  </div>
);
export default NewsCard;
