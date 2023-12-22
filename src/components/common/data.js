import img1 from "../../assets/discoverMoreImage/1.png";
import img2 from "../../assets/discoverMoreImage/2.png";
import img3 from "../../assets/discoverMoreImage/3.png";
import img4 from "../../assets/discoverMoreImage/1.jpeg";
import img5 from "../../assets/discoverMoreImage/10.jpeg";
import img6 from "../../assets/discoverMoreImage/11.jpeg";
import img7 from "../../assets/discoverMoreImage/12.jpeg";
import img8 from "../../assets/discoverMoreImage/13.jpeg";
import img9 from "../../assets/discoverMoreImage/14.jpeg";
import img10 from "../../assets/discoverMoreImage/15.jpeg";
import img11 from "../../assets/discoverMoreImage/2.jpeg";
import img12 from "../../assets/discoverMoreImage/3.jpeg";
import man1 from "../../assets/discoverMoreImage/man1.png";
import man2 from "../../assets/discoverMoreImage/man2.png";
import man3 from "../../assets/discoverMoreImage/man3.png";
import man4 from "../../assets/discoverMoreImage/man4.png";
import heroImage3 from "../../assets/3.png";
import heroImage2 from "../../assets/2.png";
import heroImage1 from "../../assets/1.png";
import badgeImg from "../../assets/ThirtPartImage/Vector (1).png";
import thirdPartRightImg1 from "../../assets/ThirtPartImage/1.png";
import thirdPartRightImg2 from "../../assets/ThirtPartImage/2.png";
import thirdPartRightImg3 from "../../assets/ThirtPartImage/3.png";
import thirdPartRightImg4 from "../../assets/ThirtPartImage/4.png";
import thirdPartRightImg5 from "../../assets/ThirtPartImage/5.png";
import productImage1 from "../../assets/product1.png";
import productImage2 from "../../assets/product2.png";
import productImage3 from "../../assets/product3.png";
import productImage4 from "../../assets/product4.png";

import featureImage1 from "../../assets/featureImage/1.png";
import featureImage2 from "../../assets/featureImage/6.png";
import featureImage6 from "../../assets/featureImage/3..png";
import featureImage9 from "../../assets/featureImage/9.png";
import featureImage5 from "../../assets/featureImage/2.png";
import featureImage3 from "../../assets/featureImage/5.png";
import featureImage4 from "../../assets/featureImage/4.png";
import featureImage7 from "../../assets/featureImage/7.png";
import featureImage8 from "../../assets/featureImage/8.png";
import manPic from "../../assets/manPic.png";

export const menus = [
  { to: "/market_place", label: "Marketplace" },
  { to: "/resource", label: "Resource" },
  { to: "/about", label: "About" },
];

export const heroData = [
  {
    id: "1",
    title: "Abstr Gradient NFT",
    userName: "Arkhan17",
    img: heroImage1,
    manImg: manPic,
    eth: "0.25 ETH",
    time: "12h  43m  42s",
  },
  {
    id: "2",
    title: "General ArtPlace NFT",
    userName: "Ripani57",
    img: heroImage2,
    manImg: man2,
    eth: "1.20 ETH",
    time: "15h  30m  20s",
  },
  {
    id: "3",
    title: "Digital Art NFT",
    userName: "Sghajik17",
    img: heroImage3,
    manImg: man3,
    eth: "1.75 ETH",
    time: "17h  43m  32s",
  },
];

export const thirdPartMiddleData = [
  {
    id: "1",
    name: "Te ASH Abstr",
    manImg: man1,
    eth: "0.25 ETH",
    num: 1,
  },
  {
    id: "3",
    name: "Latest HG Abstr",
    manImg: man2,
    eth: "0.45 ETH",
    num: 4,
  },
  {
    id: "3",
    name: "The Futr klo",
    manImg: man3,
    eth: "1.25 ETH",
    num: 2,
  },
];
export const thirdPartRightData = [
  {
    id: "1",
    name: "CryptoFunks",
    manImg: thirdPartRightImg1,
    imgIcon: badgeImg,
    percents: "+26.52%",
    num: "19, 769.39",
  },
  {
    id: "2",
    name: "Cryptix",
    manImg: thirdPartRightImg2,
    percents: "+10.52%",
    num: "2,769.39",
    color: "red",
  },
  {
    id: "3",
    name: "Frensware",
    manImg: thirdPartRightImg3,
    percents: "+2.52%",
    num: "9,232.39",
  },
  {
    id: "4",
    name: "PunkArt",
    manImg: thirdPartRightImg4,
    imgIcon: badgeImg,
    percents: "+1.52%",
    num: "3,769.39",
  },
  {
    id: "5",
    name: "Art Crypto",
    manImg: thirdPartRightImg5,
    percents: "+2.52%",
    num: "10,769.39",
    color: "red",
  },
];

export const productImage = [
  {
    id: "1",
    img: productImage1,
  },
  {
    id: "2",
    img: productImage2,
  },
  {
    id: "3",
    img: productImage3,
  },
  {
    id: "4",
    img: productImage4,
  },
];

export const featuredCollection = [
  {
    id: "1",
    featureImage: featureImage1,
    smallImage: [
      {
        id: "1",
        img1: featureImage2,
      },
      {
        id: "2",
        img1: featureImage3,
      },
      {
        id: "3",
        img1: featureImage4,
      },
    ],
    title: "Amazing Collection",
    created_by: "by Arkhan",
    item: "54",
    manPic: manPic,
  },
  {
    id: "2",
    featureImage: featureImage5,
    smallImage: [
      {
        id: "1",
        img1: featureImage3,
      },
      {
        id: "2",
        img1: featureImage2,
      },
      {
        id: "3",
        img1: featureImage7,
      },
    ],
    title: "Latest Collection",
    created_by: "by Simran",
    item: "35",
    manPic: man2,
  },
  {
    id: "3",
    featureImage: featureImage8,
    smallImage: [
      {
        id: "1",
        img1: featureImage9,
      },
      {
        id: "2",
        img1: featureImage6,
      },
      {
        id: "3",
        img1: featureImage2,
      },
    ],
    title: "Awesome Collection",
    created_by: "by Devid Jhon",
    item: "43",
    manPic: man3,
  },
];

export const data = [
  {
    id: "1",
    title: "ArtCrypto",
    eth: "0.25 ETH",
    num: "1",
    time: "3h 50m 2s left",
    img: img1,
    type: "Crypto",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "2",
    title: "NameCrypto",
    eth: "0.75 ETH",
    num: "1",
    time: "2h 50m 2s left",
    img: img2,
    type: "Crypto",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "3",
    title: "KingCrypto",
    eth: "0.25 ETH",
    num: "3",
    type: "Crypto",
    time: "3h 5m 12s left",
    img: img3,
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "4",
    title: "Morgan11",
    eth: "0.55 ETH",
    num: "2",
    time: "3h 50m 2s left",
    img: img4,
    type: "Gaming",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "5",
    title: "OrBid6",
    eth: "0.25 ETH",
    num: "1",
    time: "4h 20m 2s left",
    img: img5,
    type: "Celebrities",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "6",
    title: "mAtal8",
    eth: "0.25 ETH",
    num: "3",
    time: "3h 33m 5s left",
    img: img6,
    type: "Art",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "7",
    title: "#21 The Wonder",
    eth: "0.25 ETH",
    num: "3",
    time: "4h 4m 2s left",
    img: img7,
    type: "Game",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "8",
    title: "The Amazing Game",
    eth: "0.25 ETH",
    num: "3",
    time: "1h 50m 2s left",
    img: img8,
    type: "Game",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "9",
    title: "KingCrypto",
    eth: "0.25 ETH",
    num: "3",
    time: "3h 50m 2s left",
    img: img9,
    type: "Sport",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "10",
    title: "NameCrypto",
    eth: "0.25 ETH",
    num: "3",
    time: "3h 50m 2s left",
    img: img10,
    type: "Crypto",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "11",
    title: "Preatent",
    eth: "0.25 ETH",
    num: "3",
    time: "3h 50m 2s left",
    img: img11,
    type: "Music",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "12",
    title: "This NFT",
    eth: "0.25 ETH",
    num: "3",
    time: "3h 50m 2s left",
    img: img12,
    type: "Sport",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "13",
    title: "ArtCrypto",
    eth: "0.25 ETH",
    num: "1",
    time: "3h 50m 2s left",
    img: img1,
    type: "Crypto",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "14",
    title: "NameCrypto",
    eth: "0.75 ETH",
    num: "1",
    time: "2h 50m 2s left",
    img: img2,
    type: "Crypto",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "15",
    title: "KingCrypto",
    eth: "0.25 ETH",
    num: "3",
    type: "Crypto",
    time: "3h 5m 12s left",
    img: img3,
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
  {
    id: "16",
    title: "Morgan11",
    eth: "0.55 ETH",
    num: "2",
    time: "3h 50m 2s left",
    img: img4,
    type: "Gaming",
    manimg: [
      {
        id: "1",
        img: man1,
      },
      {
        id: "2",
        img: man2,
      },
      {
        id: "3",
        img: man3,
      },
      {
        id: "4",
        img: man4,
      },
    ],
  },
];
