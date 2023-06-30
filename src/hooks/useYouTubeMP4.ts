import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchMP4Url = async (youTubeId: string) => {
  try {
    const { status, data } = await axios.get(
      `https://yt2html5.com/?id=${youTubeId}`,
    );
    if (status !== 200) {
      return null;
    }

    return data?.data?.player_response?.streamingData?.formats?.[0]?.url;
  } catch {
    return null;
  }
};

export const useYouTubeMP4 = (youTubeId: string) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchMP4Url(youTubeId)
      .then(setUrl)
      .finally(() => setLoading(false));
  }, [setUrl, youTubeId]);

  return { url, loading };
};
