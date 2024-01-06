//설명: 섹션 프론트에 등록된 기사를 반환합니다.
// rssFeedAPI.js

// RSS 피드는 XML 형식이므로 일반적인 Axios 설정으로는 처리하기 어렵습니다.
// 이 예시에서는 간단히 URL을 반환하는 함수를 만들었습니다.
export const getRssFeedUrl = (section) => {
  return `https://rss.nytimes.com/services/xml/rss/nyt/${section}.xml`;
};
