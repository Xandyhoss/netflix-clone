type Video = {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};

export type { Video };
