import axios from "axios";
import Head from "next/head";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { Video } from "../type";

interface IProps {
  videos: Video[];
}

export default function Home({ videos }: IProps) {
  console.log(videos);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>TikTik - share vibes to others</title>
      </Head>
      <div className="flex flex-col gap-10 videos h-full">
        {videos.length ? (
          videos?.map((video: Video) => (
            <VideoCard post={video} isShowingOnHome key={video._id} />
          ))
        ) : (
          <NoResults text={`No Videos`} />
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = null;
  if (topic) {
    response = await axios.get(`http://localhost:3000/api/discover/${topic}`);
  } else {
    response = await axios.get(`http://localhost:3000/api/post`);
  }

  return {
    props: { videos: response.data },
  };
};
