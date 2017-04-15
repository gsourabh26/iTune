import types from "./types";
import login from "./login";
import dashboard from "./dashboard";

module.exports = {
    types,
    ...login,
    ...dashboard
};