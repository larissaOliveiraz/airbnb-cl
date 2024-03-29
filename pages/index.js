import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ smallCardsData, mediumCardsData }) {
   return (
      <div>
         <Head>
            <title>Airbnb-CLONE</title>
         </Head>

         <Header />
         <Banner />

         <main className="px-8 mx-auto max-w-7xl sm:px-16">
            <section className="pt-6">
               <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

               {/* Pull data from a server - API endpoints */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {smallCardsData?.map((item) => (
                     <SmallCard
                        key={item.img}
                        img={item.img}
                        location={item.location}
                        distance={item.distance}
                     />
                  ))}
               </div>
            </section>

            <section>
               <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

               <div className="flex p-3 -m-3 space-x-3 overflow-scroll scrollbar-hide">
                  {mediumCardsData?.map((item) => (
                     <MediumCard
                        key={item.img}
                        img={item.img}
                        title={item.title}
                     />
                  ))}
               </div>
            </section>

            <LargeCard
               img="https://links.papareact.com/4cj"
               title="The Greatest Outdoors"
               description="Wishlists curated by Airbnb."
               buttonText="Get Inspired"
            />
         </main>

         <Footer />
      </div>
   );
}

export async function getStaticProps() {
   const smallCardsData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
      (res) => res.json()
   );

   const mediumCardsData = await fetch(
      "https://www.jsonkeeper.com/b/VHHT"
   ).then((res) => res.json());

   return {
      props: {
         smallCardsData,
         mediumCardsData,
      },
   };
}
