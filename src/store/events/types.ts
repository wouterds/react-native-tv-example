export type Event = {
  title: string;
  channelId: string;
  startTime: Date;
  endTime: Date;
  description: string | null;
  categories: string[];
};

export type EventState = {
  data: Event[];
};
