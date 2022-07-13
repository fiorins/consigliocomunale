export const presenzeCountOld = (my_data: any, my_list: any) => {
  let list_presence: any = [];

  // let counter = 0;
  // for (const { Ardita } of my_data) {
  //   if ("Ardita" in my_data) counter += 1;
  // }
  // list_presence.push(counter);

  // for (const name in my_list) {
  //   const resultInside = Object.values(my_data).reduce(
  //     (acc: any, curr: any) => {
  //       if (curr.Fiorenza) ++acc;
  //       return acc;
  //     },
  //     0
  //   );
  //   console.log("resultInside: ", resultInside);
  // }

  // const result = Object.values(my_data).reduce((acc: any, curr: any) => {
  //   if (curr.Ardita) ++acc;
  //   return acc;
  // }, 0);
  // console.log("result: ", result);

  //-----------

  // console.log(
  //   "provaaaa:  ",
  //   // my_data.filter((x: any, i: any) => {
  //   //   return x.select;
  //   // }).length
  //   my_data.reduce((a: any, c: any) => (c.yourboolvariable ? ++a : a), 0)
  // );

  // for (const name in my_list) {
  //   let counter = 0;
  //   for (const { name } of my_data) {
  //     if (name in my_data) counter += 1;
  //   }
  //   list_presence.push(counter);
  // }

  // for (const obj of my_data) {
  //   console.log("Ardita" in obj);
  // }

  // for (const value in my_list) {
  //   let exists = Object.keys(my_data).includes("Ardita");
  // }

  // let obj: any = {};
  // my_data.forEach(
  //   (entry: any) => (obj[entry.role] = (obj[entry.role] || 0) + 1)
  // );
  // let array2 = [];
  // for (const value in obj) {
  //   array2.push({ key: value, count: obj[value] });
  // }

  // let res_array = Object.values(
  //   my_data.reduce((c: any, role: any) => {
  //     c[role] = c[role] || { key: role, count: 0 };
  //     c[role].count++;
  //     return c;
  //   }, {})
  // );

  // my_list.forEach((i: any) => {
  //   //my_data.filter((obj: any) => obj[i] === i).length
  //   let prova = my_data.reduce((sums: any, entry: any) => {
  //     sums[entry[i]] = (sums[entry[i]] || 0) + 1;
  //     return sums;
  //   }, {});
  //   list_presence.push(prova);
  // });

  my_list.forEach((i: any) => {
    //my_data.filter((obj: any) => obj[i] === i).length
    // my_data.reduce((sums: any, entry: any) => {
    //   sums[entry[i]] = (sums[entry[i]] || 0) + 1;
    //   return sums;
    // }, {});
    let result = my_data.reduce((sums: any, entry: any) => {
      sums[entry[i]] = (sums[entry[i]] || 0) + 1;
      return sums;
    }, {});
    list_presence.push(result["true"]);
  });

  // let counts = my_data.reduce((prev: any, curr: any) => {
  //   prev[curr] = (prev[curr] || 0) + 1;
  //   return prev;
  // }, {});

  // let counter: any = {};
  // let counts2 = my_data.forEach(function (obj: any) {
  //   var key = JSON.stringify(obj);
  //   counter[key] = (counter[key] || 0) + 1;
  // });

  // let result5: any = my_data.reduce((sums: any, entry: any) => {
  //   my_list.forEach((i: any) => (sums[entry[i]] = (sums[entry[i]] || 0) + 1));
  //   list_presence.push(result5);
  //   return sums;
  // }, {});

  // let result6: any = my_data.forEach((i: any) => {
  //   i.reduce((sums: any, entry: any) => {
  //     sums[entry.Ardita] = (sums[entry.Ardita] || 0) + 1;
  //     return sums;
  //   }, {});
  // });
  // list_presence.push(result6["true"]);

  // my_data.forEach((i: any) => {
  //   i.reduce((sums: any, entry: any) => {
  //     sums[entry.Ardita] = (sums[entry.Ardita] || 0) + 1;
  //     return sums;
  //   }, {});
  // });

  // my_data.reduce((sums: any, entry: any) => {
  //   sums[entry.Ardita] = (sums[entry.Ardita] || 0) + 1;
  //   return sums;
  // }, {});

  // (sums: any, entry: any) => {
  //   sums[entry.Ardita] = (sums[entry.Ardita] || 0) + 1;
  //   return sums;
  // };
  return list_presence;
};
