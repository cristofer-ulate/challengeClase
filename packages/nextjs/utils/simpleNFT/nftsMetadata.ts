const nftsMetadata = [
  {
    description: "Is it a cute dog?",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://scarlet-worrying-echidna-187.mypinata.cloud/ipfs/bafkreiczp4bfnsp4pgzqdr57dfc3wl6ajswa2gnhbo2surdsvnwj4i27ii",
    name: "Dog",
    attributes: [
      {
        name: "Jack",
        owner: "Hackathon team",
      },
    ],
  },
  {
    description: "The best hackathon team",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://scarlet-worrying-echidna-187.mypinata.cloud/ipfs/bafybeifts7bbbskfouyatyff5oncknlbye3c7lyq2wctzdxqrirrxhmqb4",
    name: "Hackathon Team",
    attributes: [
      {
        name: "Hackathon Team",
        members: "3",
      }
    ],
  }
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
