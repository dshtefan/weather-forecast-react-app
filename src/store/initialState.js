import { getLocalState } from "../utils";
import storeTemplate from "./storeTemplate";

const localState = getLocalState();

const initialState =
  localState
    ? { ...storeTemplate, ...localState }
    : storeTemplate;

export default initialState;