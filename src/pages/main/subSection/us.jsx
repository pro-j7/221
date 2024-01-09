import React, { useState, useEffect } from 'react';
import { getTopStories } from '../../../api/topStoriesAPI';
import { searchArticles } from '../../../api/articleSearchAPI';
import Header from '../../../components/header/header';
import { FaSearch } from 'react-icons/fa';

function Us() {
  const [allStories, setAllStories] = useState([]);
  const [firstDivStories, setFirstDivStories] = useState([]);
  const [secondDivStories, setSecondDivStories] = useState([]);
  const [activeTab, setActiveTab] = useState('firstTab');
  const [showInput, setShowInput] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // searchResults 상태 추가

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleSearch = (query) => {
    // 검색어가 주어지면 해당 검색어로 API를 호출하여 검색 결과를 받아옵니다.
    searchArticles(query)
      .then((response) => {
        const searchResultsData = response.data.response.docs;
        setSearchResults(searchResultsData);
      })

      .catch((error) => {
        console.error('Failed to fetch search results: ', error);
      });
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    // 검색어가 변경될 때마다 검색을 수행합니다.
    handleSearch(query);
  };

  useEffect(() => {
    getTopStories('us')
      .then((response) => {
        const allData = response.data.results;
        setAllStories(allData);

        const firstDivCount = 6;
        const firstDivData = allData.slice(0, firstDivCount);
        setFirstDivStories(firstDivData);

        const secondDivData = allData.slice(firstDivCount);
        setSecondDivStories(secondDivData);
      })
      .catch((error) => {
        console.error('Failed to fetch top stories: ', error);
      });
  }, []);
  const [hoveredLinks, setHoveredLinks] = useState({
    link1: false,
    link2: false,
    link3: false,
  });

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  return (
    <div>
      <Header />
      <div
        style={{
          fontSize: '35px',
          fontWeight: 'bold',
          color: 'black',
          borderBottom: '1px solid #d6d8db',
          margin: '0 20px',
          paddingBottom: '5px',
          fontFamily: "'WarhavenB', sans-serif",
        }}
      >
        U.S. News
      </div>
      <div
        style={{
          margin: '0 20px 0 20px',
          fontSize: '15px',
          borderBottom: 'thick double',
          marginTop: '8px',
          paddingBottom: '8px',
        }}
      >
        <span>
          <a
            href="https://www.nytimes.com/interactive/2022/us/fire-tracker-maps.html"
            style={
              hoveredLinks.link1
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseOver={() =>
              setHoveredLinks({
                link1: true,
                link2: false,
                link3: false,
              })
            }
            onMouseOut={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: false,
              })
            }
          >
            Wildfire and Air Quality Tracker
          </a>{' '}
          {'|'}
        </span>
        <span>
          {' '}
          <a
            href="https://www.nytimes.com/column/california-today"
            style={
              hoveredLinks.link2
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseOver={() =>
              setHoveredLinks({
                link1: false,
                link2: true,
                link3: false,
              })
            }
            onMouseOut={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: false,
              })
            }
          >
            California Today
          </a>{' '}
          {'|'}
        </span>
        <span>
          {' '}
          <a
            href="https://www.nytimes.com/spotlight/race"
            style={
              hoveredLinks.link3
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseOver={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: true,
              })
            }
            onMouseOut={() =>
              setHoveredLinks({
                link1: false,
                link2: false,
                link3: false,
              })
            }
          >
            Race/Related
          </a>
        </span>
      </div>

      <div style={{ display: 'flex' }}>
        <div
          style={{
            flex: '3',
            marginTop: '20px',
            borderRight: '1px solid #ccc5c5',
            paddingRight: '60px',
          }}
        >
          <ul>
            {firstDivStories.map((story) => (
              <li
                key={story.url}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  marginBottom: '20px',
                }}
              >
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{ width: '100%' }}
                  />
                )}
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '20px',
                    width: '100%',
                    fontFamily: "'WarhavenB', sans-serif",
                  }}
                >
                  {story.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 2, marginLeft: '20px' }}>
          <ul>
            {secondDivStories.map((story) => (
              <li
                key={story.url}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  borderBottom: '1px solid #ccc5c5',
                  paddingBottom: '7px',
                }}
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    flex: 1,
                    fontFamily: "'WarhavenB', sans-serif",
                  }}
                >
                  {story.title}
                </a>
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{
                      width: '30%',
                      display: 'block',
                      paddingBottom: '20px',
                      height: '20vh',
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: '20px',
          position: 'relative',
        }}
      >
        <div
          onClick={() => setActiveTab('firstTab')}
          style={{
            color: activeTab === 'firstTab' ? 'black' : '#b4aeae',
            padding: '0 30px 0 30px',
            cursor: 'pointer',
            borderTop: activeTab === 'secondTab' ? 'none' : '2px solid black',
            backgroundColor: activeTab === 'secondTab' ? 'white' : '#f8f8f8',
          }}
        >
          <p>Latest</p>
        </div>
        <div
          onClick={() => setActiveTab('secondTab')}
          style={{
            background: 'white',
            color: activeTab === 'firstTab' ? '#b4aeae' : 'black',
            padding: '20px',
            cursor: 'pointer',
            borderTop: activeTab === 'secondTab' ? '2px solid black' : 'none',
            backgroundColor: activeTab === 'secondTab' ? '#f8f8f8' : 'white',
            padding: '3px 30px 0 30px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <p
            onClick={handleButtonClick}
            style={{
              borderColor: 'none',
              display: 'inline',
              marginRight: '8px',
            }}
          >
            <FaSearch
              style={{
                borderColor: 'none',
                display: 'flex',
              }}
            />
          </p>
          <div>
            {searchResults.map((result) => (
              <div
                key={result.url}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #8b8888',
                  background: activeTab === 'firstTab' ? 'white' : '#f8f8f8',
                }}
              >
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontFamily: "'WarhavenB', sans-serif",
                    paddingLeft: '20px',
                  }}
                >
                  {result.headline.main}
                </a>
                {result.multimedia && result.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={`https://www.nytimes.com/${result.multimedia[0].url}`}
                    alt={result.headline.main}
                    style={{
                      width: '20%',
                      display: 'block',
                      paddingBottom: '20px',
                      marginTop: '20px',
                      paddingRight: '20px',
                      height: '30vh',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <input
            type="text"
            placeholder="search"
            onChange={handleSearchInputChange}
            style={{
              display: 'block',
            }}
          />
        </div>
      </div>

      <div>
        {activeTab === 'firstTab' && (
          <div>
            {/* API에서 받아온 데이터를 이용하여 화면에 표시합니다. */}
            {firstDivStories.map((story) => (
              <div
                key={story.url}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #8b8888',
                  background: activeTab === 'firstTab' ? '#f8f8f8' : 'white',
                }}
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontFamily: "'WarhavenB', sans-serif",
                    paddingLeft: '20px',
                  }}
                >
                  {story.title}
                </a>
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{
                      width: '20%',
                      display: 'block',
                      paddingBottom: '20px',
                      marginTop: '20px',
                      paddingRight: '20px',
                      height: '30vh',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'secondTab' && (
          <div>
            {/* API에서 받아온 데이터를 이용하여 화면에 표시합니다. */}
            {secondDivStories.map((story) => (
              <div
                key={story.url}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: activeTab === 'firstTab' ? 'white' : '#f8f8f8',
                  borderBottom: '1px solid #8b8888',
                }}
              >
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontFamily: "'WarhavenB', sans-serif",
                    marginRight: '10px',
                    paddingLeft: '20px',
                  }}
                >
                  {story.title}
                </a>
                {story.multimedia && story.multimedia.length > 0 && (
                  <img
                    className="story-image"
                    src={story.multimedia[0].url}
                    alt={story.title}
                    style={{
                      width: '20%',
                      height: '30vh',
                      display: 'block',
                      paddingBottom: '20px',
                      marginTop: '20px',
                      paddingRight: '20px',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Us;
