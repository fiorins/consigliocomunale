import Airtable from "airtable";
import { TAirtableQueryResults } from "../model/TAirtableQueryResults";

export const useAirtable = (
  tableName: string,
  view: string = "Grid view",
  maxRecords: number = 100
): Promise<TAirtableQueryResults> => {
  if (!tableName || tableName === "") {
    return new Promise((resolve, reject) =>
      resolve(returnError("missing parameters"))
    );
  }

  const output: any[] = [];
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "appjMMg2Hxsyb6seI"
  );
  const getData: Promise<TAirtableQueryResults> = new Promise(
    (resolve, reject) =>
      base(tableName)
        .select({ maxRecords, view })
        .eachPage(
          function page(records, fetchNextPage) {
            records.map((record) => output.push(record.fields));
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              resolve(returnError(err));
            }
            resolve(returnSuccess(output));
          }
        )
  );

  return getData;
};

const returnSuccess = (data: any): TAirtableQueryResults => ({
  success: true,
  data,
  error: "",
});

const returnError = (error: any): TAirtableQueryResults => ({
  success: false,
  data: [],
  error,
});
