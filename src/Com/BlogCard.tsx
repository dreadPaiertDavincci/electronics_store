import type { ReactNode } from "react";
import "../Style/ComStyle/BlogCard.css";
import { Link } from "react-router";

type BlogCardProps = {
  BlogIamge: string;
  BlogTiitle: string;
  BlogLink: ReactNode;
  className?: string;              // لإضافة class خارجي للأنيميشن
  innerRef?: React.Ref<HTMLDivElement>; // ref للكرت
};

function BlogCard({ BlogIamge, BlogTiitle, BlogLink, className, innerRef }: BlogCardProps) {
  return (
    <div className={`BC ${className ? className : ""}`} ref={innerRef}>
      <div className="BCImage">
        <img id="ImageBlogId" src={BlogIamge} alt={BlogTiitle} />
      </div>
      <div className="BlogTitleDiv">
        <p id="BLDIVPARA">{BlogTiitle}</p>
      </div>
      <div className="BlogLinkDiv">
        {BlogLink}
      </div>
    </div>
  );
}

export default BlogCard;
