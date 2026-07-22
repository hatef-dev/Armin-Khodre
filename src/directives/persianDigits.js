import { convertElementToPersianDigits } from "@/utils/persianDigits";

export default {
  mounted(el) {
    convertElementToPersianDigits(el);
  },
  updated(el) {
    convertElementToPersianDigits(el);
  },
};