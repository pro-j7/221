// Main.jsx

import React, { useState, useEffect } from "react";
import { getTopStories } from "../../api/topStoriesAPI";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Main = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopStories("home")
      .then((response) => {
        setStories(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch top stories: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []); // 의존성 배열 필요에 따라 수정

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading top stories.</div>;
  }

  return (
    <div>
      <Header />
      {/* <h1>Top Stories</h1> */}
      <div className="nyt-container">
        <section className="nyt-section-1">
          <ul>
            {stories.map((story) => (
              <li key={story.url} className="nyt-firstsection-li">
                {/* 가정: story.multimedia[0].url에 이미지가 저장된 위치라고 가정 */}
                {story.multimedia && story.multimedia.length > 0 && (
                  <div
                    style={{
                      width: "60%",
                      minHeight: "250px",
                    }}
                  >
                    <img
                      className="story-image"
                      src={story.multimedia[0].url}
                      alt={story.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div
                  style={{ width: "40%", height: "auto", paddingRight: "1rem" }}
                >
                  <a
                    className="nyt-firstsection-title"
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {story.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="nyt-section-2">
          <ul>
            {stories.map((story) => (
              <li key={story.url} className="nyt-secondsection-li">
                {/* 가정: story.multimedia[0].url에 이미지가 저장된 위치라고 가정 */}
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{ marginLeft: "20px" }}
                  />
                )}
                <a
                  className="nyt-secondsection-title"
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {story.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
