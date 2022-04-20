import React, { Component } from "react";
import Slider from "../components/NetflixSlider";
import Header from "../components/Header";
import HomePreview from "./HomePreview";
import Footer from "./Footer";

const movies = [
  {
    id: 1,
    image:
      "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWR1ANgH8wtkL9pgCklNdAXcNwOzA18jzu3CuKGLJlUu6AzxYUDBDXrpVeez_SpnTvdR8X8SocvoizM3fUw1xjU9yjMfFYMlhOOd2R7UHfcxvgaEw9h4LFWdTZKA.jpg?r=069",
    title: "1983",
    metadata: {
      topics: [
        { tid: 1, tname: "Duygusal" },
        { tid: 2, tname: "Ürkütücü" },
        { tid: 3, tname: "Heyecan Verici" },
        { tid: 4, tname: "Tüyler Ürpetici" },
        { tid: 5, tname: "Süper Zeka" },
      ],
      matchScore: "%99 Eşleşme",
      maturityNumber: "18",
      duration: "Mini Dizi",
      movieDesc: `1950'lerde bir yetimhanede, küçük bir kız müthiş bir satranç
            yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğunda
            bağımlılıkla mücadele etmek zorunda kalır.`,
    },
  },
  {
    id: 2,
    image:
      "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdVugdelWK-bfNRS2bQOsg4vIKG-p2McqdMdut1cF3ODNigIO88O3bLNGWDo2W81RlLQLVaekoBFga83ububEnt5O77W26h2kX-FqgvLJEHRF3kbdtyfvKcB7D4m.jpg?r=dfc",
    title: "Russian doll",
  },

  {
    id: 3,
    image:
      "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdnidv5WE4OU2lzrJYba-9R-97gYHc-z086xp5-ugM0X9pwDKyXMYRaqxcnUR-msi4nsSyXY2GmqKZPQNGayg1HvETI.webp?r=e35",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    image:
      "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWR1ANgH8wtkL9pgCklNdAXcNwOzA18jzu3CuKGLJlUu6AzxYUDBDXrpVeez_SpnTvdR8X8SocvoizM3fUw1xjU9yjMfFYMlhOOd2R7UHfcxvgaEw9h4LFWdTZKA.jpg?r=069",
    title: "1983",
  },
  {
    id: 5,
    image:
      "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdVugdelWK-bfNRS2bQOsg4vIKG-p2McqdMdut1cF3ODNigIO88O3bLNGWDo2W81RlLQLVaekoBFga83ububEnt5O77W26h2kX-FqgvLJEHRF3kbdtyfvKcB7D4m.jpg?r=dfc",
    title: "Russian doll",
  },

  {
    id: 6,
    image:
      "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdnidv5WE4OU2lzrJYba-9R-97gYHc-z086xp5-ugM0X9pwDKyXMYRaqxcnUR-msi4nsSyXY2GmqKZPQNGayg1HvETI.webp?r=e35",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
];

class HomePage extends Component {
  render() {
    return (
      <div className="flex justify-center flex-col pb-6">
        <Header />
        <div>
          <HomePreview />
          <div
            style={{
              position: "absolute",
              bottom: -100,
            }}
          >
            <Slider>
              {movies.map((movie) => (
                <Slider.Item movie={movie} key={movie.id}>
                  item1
                </Slider.Item>
              ))}
            </Slider>
          </div>
          <Slider>
            {movies.map((movie) => (
              <Slider.Item movie={movie} key={movie.id}>
                item1
              </Slider.Item>
            ))}
          </Slider>
          <Slider>
            {movies.map((movie) => (
              <Slider.Item movie={movie} key={movie.id}>
                item1
              </Slider.Item>
            ))}
          </Slider>
          <Slider>
            {movies.map((movie) => (
              <Slider.Item movie={movie} key={movie.id}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
