/** return a list with two lists (attendances and absences) */

import _ from "lodash";

export const councilDataOld = (my_data: any) => {
  let prova: any = [];
  //console.log("prova: ", Object.values(my_data[0]));

  // my_data.reduce((sums: any, entry: any) => {
  //       sums[entry[i]] = (sums[entry[i]] || 0) + 1;
  //       return sums;
  //     }, {});
  //     attendances.push(result["true"]); //pick presence
  //   }

  //   attendance_absences.push(attendances, absences);

  // let prova1 = Object.keys(my_data).reduce((a, b) =>
  //   my_data[a] > my_data[b] ? a : b
  // );

  // let prova2 = my_data.reduce((a: any, b: any) =>
  //   my_data[a] > my_data[b] ? a : b
  // );

  var prova3 = _.maxBy(_.keys(my_data), function (o) {
    return my_data[o];
  });

  const prova4 = my_data.reduce(function (prev: any, current: any) {
    return prev.Consiglio_Num > current.Consiglio_Num ? prev : current;
  }, {}); //returns object

  const prova5 = Math.max(...my_data.map((o: any) => o.Consiglio_Num), 0);

  const prova6 = Math.max(...my_data.map((o: any) => o.Consiglio_Num));

  const prova7 = my_data.reduce(
    (a: any, b: any) => (a.Consiglio_Num > b.Consiglio_Num ? a : b),
    {}
  ).Consiglio_Num; // 30 chars time complexity:  O(n)

  // const prova8 = my_data.sort(
  //   (a: any, b: any) => b.Consiglio_Num > a.Consiglio_Num
  // )[0].Consiglio_Num; // 27 chars time complexity:  O(nlogn)

  const prova9 = Math.max(...my_data.map((o: any) => o.Consiglio_Num)); // 26 chars time complexity: >O(2n)

  // let prova10 = my_data.map((a: any) =>
  //   Math.max(...a.map((b: any) => b.Consiglio_Num))
  // );

  // let prova11 = my_data.map(function (arr: any) {
  //   return Math.max.apply(
  //     null,
  //     arr.map(function (o: any) {
  //       return o.Consiglio_Num;
  //     })
  //   );
  // });

  // let prova12 = my_data.map(function (arr: any) {
  //   return arr.reduce(function (a: any, b: any) {
  //     return a.Consiglio_Num < b.Consiglio_Num ? b : a;
  //   }, {}).Consiglio_Num;
  // });

  const prova13 = my_data.reduce(
    (p: any, c: any) => (p.Consiglio_Num > c.Consiglio_Num ? p : c),
    {}
  );

  //console.log("prova1: ", prova1);
  //console.log("prova2: ", prova2);
  console.log("prova3: ", prova3);
  console.log("prova4: ", prova4);
  console.log("prova5: ", prova5);
  console.log("prova6: ", prova6);
  console.log("prova7: ", prova7);
  //console.log("prova8: ", prova8);
  console.log("prova9: ", prova9);
  //console.log("prova10: ", prova10);
  //console.log("prova11: ", prova11);
  //console.log("prova12: ", prova12);
  console.log("prova13: ", prova13);

  // let filt1 = Object.keys(my_data).filter((i: any) => i["Consiglio_Num"]);

  // let ids = ["2017"];

  // let filt2 = my_data.filter(function (itm: any) {
  //   return ids.indexOf(itm.Anno) > -1;
  // });
  // filt2 = { records: filt2 };

  // let filt3 = my_data.filter((i: any) => ids.includes(i.Anno));

  // // const filt4 = Object.keys(my_data)
  // //   .filter((key) => ids.includes(key))
  // //   .reduce((obj, key) => {
  // //     obj[key] = my_data[key];
  // //     return obj;
  // //   }, {});

  const filt5 = my_data.filter((x: any) => x.Anno[0] == ["2018"]);

  // console.log("filt1: ", filt1);
  // console.log("filt2: ", filt2);
  // console.log("filt3: ", filt3);
  //console.log("filt4: ", filt4);
  console.log("filt5: ", filt5);

  return prova;
};
