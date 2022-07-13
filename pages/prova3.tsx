import { NextPage } from "next";
import { useState, useEffect } from "react";
import Airtable from "airtable";
import { ConsiglioComunale } from "../model/consiglioType";
import grando from "../data/grando.json";
import grando_test from "../data/grando_test.json";
import { Card } from "../components/Card";
import base from "./api/base";

const Prova3: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    base("Grando_Test")
      .select({ view: "Grid view" })
      .eachPage((records: any, fetchNextPage) => {
        //setData(records) // e ci si accede poi tramite data.fields, ecc...
        setData(
          records.map((record: any) => {
            return { id: record.id, ...record.fields };
          })
        );
        fetchNextPage();
      });
  }, []);

  // useEffect(() => {
  //   base("Grando_Test")
  //     .select({ view: "Grid view" })
  //     .eachPage((records: any, fetchNextPage) => {
  //       setData(records); //e ci si accede poi tramite data.fields, ecc...
  //       fetchNextPage();
  //     });
  // }, []);

  let list_consiglieri: string[][] = [];
  // let list_consiglieri: string[] = Object.keys(data);
  data.forEach((i: any) => {
    return list_consiglieri.push(Object.keys(i));
  });
  console.log("list_consiglieri: ", list_consiglieri);
  let merged: any = Array.prototype.concat.apply([], list_consiglieri);
  let merged2: any = list_consiglieri.reduce((a, b) => a.concat(b), []);
  let merged3: any = list_consiglieri.flat();
  console.log("merged: ", merged);
  console.log("merged2: ", merged2);
  console.log("merged3: ", merged3);
  let uniques = Array.from(new Set(merged3));
  console.log("uniques: ", uniques);
  let filtered = uniques.filter(function (value) {
    return (
      value != "id" &&
      value != "Consiglio_Num" &&
      value != "Data" &&
      value != "Anno" &&
      value != "Delibera_Num" &&
      value != "Presenti" &&
      value != "Assenti"
    );
  });
  console.log("filtered: ", filtered);

  //--------------  OTHERS RESULTS
  // let count = Object.entries(data);
  // console.log("count: ", count);
  // console.log("countL: ", count.length);
  // let delibereTotali = data.length;
  // console.log("delibereTotali: ", delibereTotali);
  //--------------  RESULT 1
  // let result1: any = Object.entries(data).filter(
  //   ([key, value]) => key.match("Ardita") && value
  // ).length;
  // console.log("result1: ", result1);
  //--------------  RESULT 2
  // let result2: any = Object.keys(data).reduce(
  //   (acc: any, curr: any) =>
  //     curr.endsWith("true") && data[curr] ? acc + 1 : acc,
  //   0
  // );
  // console.log("result2: ", result2);
  //--------------  RESULT 3
  // let result3: any = Object.keys(data).filter(
  //   (k: any) => k.endsWith("false") && data[k]
  // ).length;
  // console.log("result3: ", result3);
  //--------------  RESULT 4 ***
  let result4: any = data.reduce(function (sums: any, entry: any) {
    sums[entry.Ardita] = (sums[entry.Ardita] || 0) + 1;
    return sums;
  }, {});
  console.log("result4: ", result4);
  console.log("result4 op1: ", result4["true"]);
  console.log("result4 op2: ", result4["undefined"]);
  //--------------  RESULT 4bis
  // let somma: any;
  // let i: any;
  // function funct1(sums: any, entry: any) {
  //   sums[entry.somma] = (sums[entry.i] || 0) + 1;
  //   return sums;
  // }
  // let result4bis: any = data.reduce(funct1(somma, i), {});
  // console.log("result4bis: ", result4bis);
  // console.log("result4bis op1: ", result4bis["true"]);
  // console.log("result4bis op2: ", result4bis["undefined"]);
  //--------------  RESULT 5
  // let result5: any[] = [];
  // Object.keys(data).forEach((key: any) => {
  //   if (/Ardita/.test(key)) result5.push(data[key]);
  // });
  // console.log("result5: ", result5);
  //--------------  RESULT 6
  // let result6: any = Object.keys(data)
  //   .filter((key: any) => /Ardita/.test(key))
  //   .map((key: any) => data[key]);
  // console.log("result6: ", result6);
  //--------------  RESULT 7
  // let result7_keys: any = Object.keys(data).filter(
  //   (key) => key.indexOf("Ardita") > -1
  // );
  // console.log("result7_keys: ", result7_keys);
  // result7_keys.forEach((key: any) => {
  //   console.log(`${key}: ${data[key]}`);
  // });
  //--------------  RESULT 8
  // var result8: any = Object.keys(data).filter((item) => {
  //   return item.indexOf("Ardita") != -1;
  // });
  // console.log("result8: ", result8);
  // console.log("result8.length: ", result8.length);
  //--------------  RESULT 9
  const result9 = Object.values(
    data.reduce((a: any) => {
      a[a.Ardita] = Object.assign(a, {
        tally: (a[a.Ardita] || { tally: 0 }).tally + 1,
      });
      return a;
    }, {})
  );
  console.log("result9: ", result9);

  return (
    <div>
      <h1>Catalog</h1>
      {data.length}
      <Card delibereTot={data.length} />
    </div>
  );
};

export default Prova3;
