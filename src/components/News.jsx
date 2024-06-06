import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

export default function News() {
  const [news, setNews] = useState();
  const { currentColor } = useStateContext();
  const { user, isAuthenticated } = useAuth0();

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
        date: 1700000000,
        domain: "www.bbc.com",
        image:
          "https://ichef.bbci.co.uk/news/1024/branded_news/12345/production/_123456789_gettyimages-987654321.jpg",
        isVideo: false,
        link: "https://www.bbc.com/news/health-670000000",
        preview:
          "Health experts from the World Health Organization recommend a new wave of COVID-19 booster shots, citing rising cases globally...",
        pubLogo:
          "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.bbc.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
        publisher: "BBC",
        relatedArticles: [
          {
            date: 1699916400,
            domain: "www.youtube.com",
            image: "https://img.youtube.com/vi/abcdefg/0.jpg",
            isVideo: true,
            link: "https://www.youtube.com/watch?v=abcdefg",
            preview: null,
            pubLogo:
              "https://yt3.ggpht.com/ytc/AKedOLQ4L8aopIMJFzefsd8w4rLJG8pRmU5KQQzU3PO4ZQ=s88-c-k-c0x00ffffff-no-rj",
            publisher: "CNN",
            title: "New COVID Booster Recommendations Explained",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1699830000,
            domain: "www.wsj.com",
            image:
              "https://s.wsj.net/public/resources/images/BN-XC124_3kfvz_OR_20210419124812.jpg",
            isVideo: false,
            link: "https://www.wsj.com/articles/who-recommends-new-covid-booster-shots-1700000000",
            preview:
              "The World Health Organization's latest guidance on COVID-19 boosters aims to mitigate the impact of new variants.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.wsj.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "The Wall Street Journal",
            title: "WHO Recommends New COVID Booster Shots",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
          {
            date: 1699743600,
            domain: "www.healthline.com",
            image:
              "https://www.healthline.com/hlcmsresource/images/Editorial/Wellness/Exercise/yoga_pose.png",
            isVideo: false,
            link: "https://www.healthline.com/health-news/new-covid-booster-shots-what-you-need-to-know-1700000000",
            preview:
              "As new COVID-19 boosters are recommended, here's what you need to know about their availability and effectiveness.",
            pubLogo:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.healthline.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            publisher: "Healthline",
            title: "New COVID Booster Shots: What You Need to Know",
            topicId:
              "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
          },
        ],
        title: "WHO Recommends New COVID Boosters: Global Health Update",
        topicId:
          "CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2puNTRQOUNCRWJhSnlQNDdvS0VDZ0FQAQ",
      },
      {
        date: 1700500000,
        domain: "www.reuters.com",
        image:
          "https://static.reuters.com/resources/r/?m=02&d=20231102&t=2&i=1560000000&w=1024&fh=&fw=&ll=&pl=&sq=&r=20231102150000",
        isVideo: false,
        link: "https://www.reuters.com/health/who-advises-new-covid-boosters-worldwide-1700500000/",
        preview:
          "In light of the increasing COVID-19 cases, WHO advises global rollout of new booster shots to curb the spread of the virus...",
        pubLogo:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reuters.com&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
        publisher: "Reuters",
        title: "WHO Advises New COVID Boosters Worldwide: Health Update",
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

        {isAuthenticated &&
          news?.map((item) => {
            return (
              <div className="mb-4" key={item.date}>
                <p className="text-md font-medium">{item.title}</p>
                <p className="text-gray-600 text-xs mt-1 font-thin">
                  {item.publisher}
                </p>
                <p className="text-gray-400 text-xs mt-2 mb-1">
                  {item.preview}
                </p>
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
        {!isAuthenticated && (
          <>
            <div className="h-full flex justify-center items-center ">
              <div className="text-center">
                <p>
                  <LoginButton />
                </p>
                <p className="text-xs font-extralight mt-2 text-gray-400">
                  {" "}
                  Sign in to get latest news
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
