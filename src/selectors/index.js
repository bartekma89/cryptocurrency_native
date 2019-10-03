import { get } from "lodash";

export const getCrypto = state => get(state, "crypto");
