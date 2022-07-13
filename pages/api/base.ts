import Airtable from "airtable";

// api keys are confidential
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appjMMg2Hxsyb6seI"
);

//const result = await base("Grando_Test").select({}).all();

export default base; //result
