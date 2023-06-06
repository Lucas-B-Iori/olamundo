import React from "react";
import styles from "./PostsRecomendados.module.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostCard from "components/PostCard";

export default function PostsRecomendados() {
  const parametros = useParams();
  // console.log(parametros.id)
  // console.log(posts.map((post) => post.id))

  const postsRecomendados = posts
    .filter((post) => post.id !== +parametros.id)
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <>
      <h2 className={styles.tituloOutrosPosts}>
        Outros posts que você pode gostar:
      </h2>
      <div className={styles.postsRecomendados}>
				{postsRecomendados.map((postRecomendado) => {
					return (
						<PostCard post={postRecomendado}/>
					)
				})}
			</div>
    </>
  );
}
