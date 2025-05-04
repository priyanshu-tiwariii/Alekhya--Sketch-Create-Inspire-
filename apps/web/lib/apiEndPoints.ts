import env from "./env"


export const BASE_URL = env.BackendUrl;
export const API_URL = BASE_URL + "/api/v1";
export const AUTH_URL = API_URL + "/auth";
export const FILE_URL = API_URL + "/file";
export const CANVAS_URL = API_URL + "/canvas";
export const COLLAB_URL = API_URL + "/collab";
export const COLLAB_MODE_URL = API_URL + "/collabMode";