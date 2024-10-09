export function filterData(searchText, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
