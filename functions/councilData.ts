/** return numbers of councils, resolutions and last council */

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
    //create a copy of original data filtering by year
    const filtered = my_data.filter((x: any) => x.Anno == i);

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

  //retrieve last council date

  const my_data_int = my_data.map((obj: any) => {
    const value = parseInt(obj.Anno); // convert the value with the 'age' key to an integer
    return { ...obj, Anno: value }; // create a new object with the integer value and all other properties
  });

  const maxYear = Math.max(...my_data_int.map((obj: any) => obj.Anno));
  const filteredList = my_data_int.filter((obj: any) => obj.Anno === maxYear);

  const maxResolution = filteredList.reduce((acc: any, curr: any) => {
    return acc.Delibera_Num > curr.Delibera_Num ? acc : curr;
  });
  const last_council = maxResolution.Data + " " + maxResolution.Anno;

  //put everything inside an array and then get the data through the indexes
  council_data.push(
    tot_councils,
    tot_resolutions,
    years,
    councils_resolutions,
    last_council
  );

  return council_data;
};
