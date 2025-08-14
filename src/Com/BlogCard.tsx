import type { ReactNode } from "react";
import "../Style/ComStyle/BlogCard.css";
import { Link } from "react-router";

type BlogDataProps = {
  BlogIamge: string;
  BlogTiitle: string;
  BlogLink: ReactNode;
};

function BlogCard({ BlogIamge, BlogTiitle, BlogLink }: BlogDataProps) {
  return (
    <div className="BC">
      <div className="BCImage">
        <img id="ImageBlogId" src={BlogIamge} alt="Tahiyaati" />
      </div>
      <div className="BlogTitleDiv">
        <p id="BLDIVPARA">{BlogTiitle}</p>
      </div>
      <div className="BlogLinkDiv">
        <Link id="BlogLinCar" to={"#"}>
          {BlogLink}
        </Link>
      </div>
    </div>
  );
}
export default BlogCard;
