import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/banner";
import SmallCard from "../components/small-card";
import MediumCard from "../components/medium-card";
import LargeCard from "../components/large-card";
import Footer from "../components/footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-10 mb-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from api  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {exploreData?.map((item, i) => (
              <SmallCard
                key={i}
                location={item.location}
                img={item.img}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        {/* section2 */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide mb-16 p-3 -ml-3">
            {cardsData?.map((data, i) => (
              <MediumCard key={i} img={data.img} title={data.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const exploreDataRes = await fetch(`https://jsonkeeper.com/b/4G1G`);
  const exploreData = await exploreDataRes.json();

  const cardsDataRes = await fetch(`https://links.papareact.com/zp1`);
  const cardsData = await cardsDataRes.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
