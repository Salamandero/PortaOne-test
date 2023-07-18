import debounce from "lodash.debounce";

import "./style.css";

import { filterUnique } from "./filterUnique.js";

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector("textarea[data-input]");

inputRef.addEventListener("input", debounce(filterUnique, DEBOUNCE_DELAY));
