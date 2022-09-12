import Airtable from "airtable";

/** retrieve data from airtable base --- remember api keys are confidential */
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "app9vHt85pjJFeOik"
);

export default base;
