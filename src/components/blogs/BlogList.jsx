import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./BlogList.module.scss";
import BlogItem from './BlogItem';
import { blogData } from "../../data/index";
const BlogList = () => {
  return (
    <div className={styles.container}>
      <h2>Our Blogs</h2>
      <p>Trends and perspectives for buyers and investors</p>
      <div className={styles.blog_list}>
        {
          blogData.map((data) => {
            return <BlogItem key={data.id}
              img={data.img}
              bHead={data.bHead}
              bTitle={data.bTitle}
              bText={data.bText}
              bdImg={data.bdImg}
              bWriter={data.bWriter}
              bDate={data.bDate}
            />
          })
        }
      </div>

    <Link to="/blogs"><button className="btn btn-secondary">View All Blogs</button></Link>  

    </div>
  )
}

export default BlogList;