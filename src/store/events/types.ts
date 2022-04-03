export type Event = {
  id: string;
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
