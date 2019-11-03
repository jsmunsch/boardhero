import React, { useEffect, useState } from "react";
import axios from "axios";

export function getGamesFromApi(name) {
  return fetch(`/api/search?name=${name}`).then(response => response.json());
}
