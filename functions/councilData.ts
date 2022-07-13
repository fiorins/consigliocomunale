/** return
 *
 * numero consigli totali
 * numero delibere totali
 * lista anni
 * lista consigli per anni
 * lista delibere per anni
 */

export const councilData = (my_data: any) => {
  let prova: any = [];

  const prova1 = my_data.reduce(
    (prev: any, curr: any) =>
      prev.Consiglio_Num > curr.Consiglio_Num ? prev : curr,
    {}
  ).Consiglio_Num; // 30 chars time complexity:  O(n)

  const prova2 = Math.max(...my_data.map((o: any) => o.Consiglio_Num)); // 26 chars time complexity: >O(2n)

  console.log("prova1: ", prova1);
  console.log("prova2: ", prova2);

  const filt1 = my_data.filter((x: any) => x.Anno[0] == ["2018"]);

  console.log("filt1: ", filt1);

  return prova;
};
