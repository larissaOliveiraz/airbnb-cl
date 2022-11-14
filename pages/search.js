import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import { useRouter } from "next/router";
import { format, isThisMinute } from "date-fns";

export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const startDateFormatted = format(new Date(startDate), "dd MMMM yy");
  const endDateFormatted = format(new Date(endDate), "dd MMMM yy");
  const rangeDates = `${startDateFormatted} - ${endDateFormatted}`;

  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${rangeDates} | ${numberOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays for - {rangeDates} - {numberOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Room and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <SearchCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
