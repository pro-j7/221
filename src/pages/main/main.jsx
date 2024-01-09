import React, { useState, useEffect } from 'react';
import { getTopStories } from '../../api/topStoriesAPI';
import { getLatestArticles } from '../../api/timesNewswireAPI'; // 추가된 임포트
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Main = () => {
  const [leftSectionStories, setLeftSectionStories] = useState([]);
  const [rightSectionStories, setRightSectionStories] = useState([]); // 오른쪽 섹션 상태
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopStories('home')
      .then((response) => {
        setLeftSectionStories(response.data.results);
      })
      .catch((error) => {
        console.error('Failed to fetch top stories: ', error);
        setError(error);
      });

    getLatestArticles()
      .then((response) => {
        setRightSectionStories(response.data.results);
      })
      .catch((error) => {
        console.error('Failed to fetch latest articles: ', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading stories.</div>;
  }

  return (
    <div>
      <Header />
      <div className="nyt-container">
        <section className="nyt-section-1">
          <ul>
            {leftSectionStories.map((story) => (
              <li key={story.url} className="nyt-firstsection-li">
                {/* 가정: story.multimedia[0].url에 이미지가 저장된 위치라고 가정 */}
                {story.multimedia && story.multimedia.length > 0 && (
                  <div
                    style={{
                      width: '60%',
                      minHeight: '250px',
                    }}
                  >
                    <img
                      className="story-image"
                      src={story.multimedia[0].url}
                      alt={story.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                )}
                <div
                  style={{ width: '40%', height: 'auto', paddingRight: '1rem' }}
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
            {rightSectionStories.map((story) => (
              <li key={story.url} className="nyt-secondsection-li">
                {/* 가정: story.multimedia[0].url에 이미지가 저장된 위치라고 가정 */}
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{
                      marginLeft: '20px',
                      width: '100px', // Specify the desired width
                      height: '100px',
                    }}
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
