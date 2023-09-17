// import { API_BASE_URL } from "@/constants/env";
import { format, intervalToDuration, parseISO } from "date-fns";

export const getInitialName = (name: string) => {
  let names = String(name || "")
    .trim()
    .replace("[", "")
    .replace("(", "")
    .split(" ");
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

export const getImageUrl = (url: string) => {
  if (url.includes("http")) {
    return url;
  }
  // return API_BASE_URL + url;
};

export const rupiahFormat = (num: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency", // add Rp
    currency: "IDR",
    // maximumSignificantDigits: 20
    minimumFractionDigits: 0,
  }).format(num || 0);

export const getDuration = (start = 0, end = 0) =>
  intervalToDuration({ start, end });

export const revertNumberFormat = (numberStringFormatted: string) => {
  return Number(numberStringFormatted.split(",").join("").split(".").join(""));
};
