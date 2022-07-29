/** return numbers of councils and resolutions */

export const councilData = (my_data: any) => {
  let council_data: any = [];
  let councils: any = [];
  let resolutions: any = [];
  let councils_resolutions: any = [];

  let years_list_keys: string[][] = [];
  my_data.forEach((i: any) => {
    return years_list_keys.push(i["Anno"]);
  });
  let merged = years_list_keys.flat();
  let uniques = Array.from(new Set(merged));
  const years: string[] = uniques.sort();

  years.forEach((i: any) => {
    const filtered = my_data.filter((x: any) => x.Anno == [i]);

    //count councils per year
    let councils_list_keys: string[][] = [];
    filtered.forEach((i: any) => {
      return councils_list_keys.push(i["Consiglio_Num"]);
    });
    let councils_year = Array.from(new Set(councils_list_keys)).length;

    //count resolutions per year
    let resolutions_list_keys: string[][] = [];
    filtered.forEach((i: any) => {
      return resolutions_list_keys.push(i["Delibera_Num"]);
    });
    let resolutions_year = Array.from(new Set(resolutions_list_keys)).length;

    councils.push(councils_year);
    resolutions.push(resolutions_year);
  });

  councils_resolutions.push(councils, resolutions);

  //count councils through all years
  const tot_councils = councils.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  //count resolutions through all years
  const tot_resolutions = resolutions.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  //put everything inside an array and then get the data through the indexes
  council_data.push(tot_councils, tot_resolutions, years, councils_resolutions);

  return council_data;
};
