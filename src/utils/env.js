const liveHost = "https://us-central1-snackview-dc76a.cloudfunctions.net";
const localHost = "http://localhost:5001/snackview-dc76a/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
