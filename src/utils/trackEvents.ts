import { event } from "nextjs-google-analytics";

type trackingKeys =
  | "local_donate_click"
  | "international_donate_click"
  | "merch_click"
  | "contact_click";

const trackEvents = (
  key: trackingKeys,
  category?: string,
  label?: string,
  value?: number
) => {
  event(key, { category, label, value });
};

export default trackEvents;
