import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function News() {
  const [news, setNews] = useState();
  const { currentColor } = useStateContext();

  const sample_news = () => {
    const sample_data = [
      {
        date: 1694548591,
        domain: "www.npr.org",
        image:
          "https://media.npr.org/assets/img/2023/09/12/gettyimages-1363336039_wide-7e28f68a400654c63dde7fe102238bc9a2fa3752-s1400-c100.jpg",
        isVideo: false,
        link: "https://www.npr.org/sections/health-shots/2023/09/12/1199003441/cdc-advisers-back-broad-rollout-out-of-new-covid-boosters",
        preview:
          "A panel of advisers to the Centers for Disease Control and Prevention backed the broad use of new COVID-19 vaccines, as cases of the respiratory illness ...",
        pubLogo:
          "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.npr.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
        publisher: "NPR",
        relatedArticles: [
          {
            date: 1694464200,
            domain: "www.youtube.com",
            image: "https://img.youtube.com/vi/undefined/0.jpg",
            isVideo: true,
            link: "https://www.youtube.com/watch?v=1L4EZMUadM8",
            preview: null,
            pubLogo:
              "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw",
            publisher: "MSNBC",
            title:
              "FDA approves new Covid booster: Here's what you need to know",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1694526420,
            domain: "www.nytimes.com",
            image:
              "https://static01.nyt.com/images/2023/09/12/multimedia/12WELL-COVID-BOOSTER1-zfck/12WELL-COVID-BOOSTER1-zfck-videoSixteenByNine3000.jpg",
            isVideo: false,
            link: "https://www.nytimes.com/2023/09/11/well/live/covid-vaccine-booster-fall.html",
            preview:
              "The updated vaccines could become available within a few days.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.nytimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "The New York Times",
            title: "What to Know About the New Covid Booster Shots",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1694463392,
            domain: "beststocks.com",
            image: null,
            isVideo: false,
            link: "https://beststocks.com/novavax-secures-contracts-for-global-distribu/",
            preview:
              "As of September 11, 2023, the CEO of Novavax has made an exciting announcement regarding their updated COVID-19 vaccine. The company has successfully.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://beststocks.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "Best Stocks",
            title:
              "Novavax Secures Contracts for Global Distribution of COVID19 Vaccine",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
        ],
        title: "CDC experts recommend new COVID boosters : Shots - Health News",
        topicId:
          "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
      },
      {
        date: 1694548592,
        domain: "www.npr.org",
        image:
          "https://media.npr.org/assets/img/2023/09/12/gettyimages-1363336039_wide-7e28f68a400654c63dde7fe102238bc9a2fa3752-s1400-c100.jpg",
        isVideo: false,
        link: "https://www.npr.org/sections/health-shots/2023/09/12/1199003441/cdc-advisers-back-broad-rollout-out-of-new-covid-boosters",
        preview:
          "A panel of advisers to the Centers for Disease Control and Prevention backed the broad use of new COVID-19 vaccines, as cases of the respiratory illness ...",
        pubLogo:
          "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.npr.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
        publisher: "NPR",
        relatedArticles: [
          {
            date: 1694464200,
            domain: "www.youtube.com",
            image: "https://img.youtube.com/vi/undefined/0.jpg",
            isVideo: true,
            link: "https://www.youtube.com/watch?v=1L4EZMUadM8",
            preview: null,
            pubLogo:
              "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw",
            publisher: "MSNBC",
            title:
              "FDA approves new Covid booster: Here's what you need to know",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1694526420,
            domain: "www.nytimes.com",
            image:
              "https://static01.nyt.com/images/2023/09/12/multimedia/12WELL-COVID-BOOSTER1-zfck/12WELL-COVID-BOOSTER1-zfck-videoSixteenByNine3000.jpg",
            isVideo: false,
            link: "https://www.nytimes.com/2023/09/11/well/live/covid-vaccine-booster-fall.html",
            preview:
              "The updated vaccines could become available within a few days.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.nytimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "The New York Times",
            title: "What to Know About the New Covid Booster Shots",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1694463392,
            domain: "beststocks.com",
            image: null,
            isVideo: false,
            link: "https://beststocks.com/novavax-secures-contracts-for-global-distribu/",
            preview:
              "As of September 11, 2023, the CEO of Novavax has made an exciting announcement regarding their updated COVID-19 vaccine. The company has successfully.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://beststocks.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "Best Stocks",
            title:
              "Novavax Secures Contracts for Global Distribution of COVID19 Vaccine",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
        ],
        title: "CDC experts recommend new COVID boosters : Shots - Health News",
        topicId:
          "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
      },
      {
        date: 1694548593,
        domain: "www.npr.org",
        image:
          "https://media.npr.org/assets/img/2023/09/12/gettyimages-1363336039_wide-7e28f68a400654c63dde7fe102238bc9a2fa3752-s1400-c100.jpg",
        isVideo: false,
        link: "https://www.npr.org/sections/health-shots/2023/09/12/1199003441/cdc-advisers-back-broad-rollout-out-of-new-covid-boosters",
        preview:
          "A panel of advisers to the Centers for Disease Control and Prevention backed the broad use of new COVID-19 vaccines, as cases of the respiratory illness ...",
        pubLogo:
          "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.npr.org&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
        publisher: "NPR",
        relatedArticles: [
          {
            date: 1694464200,
            domain: "www.youtube.com",
            image: "https://img.youtube.com/vi/undefined/0.jpg",
            isVideo: true,
            link: "https://www.youtube.com/watch?v=1L4EZMUadM8",
            preview: null,
            pubLogo:
              "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw",
            publisher: "MSNBC",
            title:
              "FDA approves new Covid booster: Here's what you need to know",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1694526420,
            domain: "www.nytimes.com",
            image:
              "https://static01.nyt.com/images/2023/09/12/multimedia/12WELL-COVID-BOOSTER1-zfck/12WELL-COVID-BOOSTER1-zfck-videoSixteenByNine3000.jpg",
            isVideo: false,
            link: "https://www.nytimes.com/2023/09/11/well/live/covid-vaccine-booster-fall.html",
            preview:
              "The updated vaccines could become available within a few days.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.nytimes.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "The New York Times",
            title: "What to Know About the New Covid Booster Shots",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1694463392,
            domain: "beststocks.com",
            image: null,
            isVideo: false,
            link: "https://beststocks.com/novavax-secures-contracts-for-global-distribu/",
            preview:
              "As of September 11, 2023, the CEO of Novavax has made an exciting announcement regarding their updated COVID-19 vaccine. The company has successfully.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://beststocks.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "Best Stocks",
            title:
              "Novavax Secures Contracts for Global Distribution of COVID19 Vaccine",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
        ],
        title: "CDC experts recommend new COVID boosters : Shots - Health News",
        topicId:
          "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
      },
    ];

    setNews(sample_data);
  };
  const fetch_news = async () => {
    const url =
      "https://newsapi90.p.rapidapi.com/topic/business?language=en-US&region=US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e9ab5d0058msha6982055f52a948p1f4181jsnef141237dd85",
        "X-RapidAPI-Host": "newsapi90.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setNews(result);
    } catch (error) {
      sample_news();
      console.error(error);
    }
  };

  useEffect(() => {
    // fetch_news();
    sample_news();
  }, []);
  return (
    <>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-2 p-4 rounded-2xl w-72 mt-3  h-96 overflow-y-scroll no-scrollbar ">
        <p className="text-black font-medium mb-4 dark:text-white text-xl">
          News
        </p>
        {news?.map((item) => {
          return (
            <div className="mb-4" key={item.date}>
              <p className="text-md font-medium">{item.title}</p>
              <p className="text-gray-600 text-xs mt-1 font-thin">
                {item.publisher}
              </p>
              <p className="text-gray-400 text-xs mt-2 mb-1">{item.preview}</p>
              <Link
                className={`text-gray-400 text-xs mb-8 hover:opacity-75`}
                style={{ color: currentColor }}
                to={item.link}
              >
                Know More
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
