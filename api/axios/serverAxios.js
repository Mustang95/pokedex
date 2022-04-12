/*
 * Creates an axios instance with a base URL to the server.
 * This way we avoid having to add the base of the URL individually in the calls.
 */

const axios = require("axios");

const { ROOT_PATH } = require("../connection.js");

const serverAxios = axios.create({
  baseURL: `${ROOT_PATH}/`,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "d0091821-bf76-4265-ac68-9ccf234ece2c",
  },
});

module.exports = serverAxios;
