import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import PostsRecomendados from "components/PostsRecomendados";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === +parametros.id;
  });

  if (!post) {
    return <NaoEncontrada />;
  }

	
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
			<>
				<PostModelo
				fotoCapa={`/posts/${post.id}/capa.png`}
				titulo={post.titulo}
				>
				<div className="post-markdown-container">
					<ReactMarkdown>{post.texto}</ReactMarkdown>
					<PostsRecomendados />
				</div>
				</PostModelo>
			</>
          }
        />
      </Route>
    </Routes>
  );
}
