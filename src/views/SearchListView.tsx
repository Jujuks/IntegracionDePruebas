import SearchList from "../components/SearchList";

export default function SearchListView() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Buscador en Lista</h1>
      <SearchList />
    </div>
  );
}