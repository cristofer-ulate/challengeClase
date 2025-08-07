"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">enefetito</span>
            <span className="block text-xl font-bold">The Ultimate NFT Marketplace on Base Network</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <div className="flex items-center flex-col flex-grow mt-4">
            <div className="px-5 w-[90%]">
              <h1 className="text-center mb-6">
                <span className="block text-4xl font-bold">Fast, Secure, and Beautiful</span>
              </h1>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/hero.png"
                  width="727"
                  height="231"
                  alt="enefetito banner"
                  className="rounded-xl border-4 border-primary"
                />
                <div className="max-w-3xl">
                  <p className="text-center text-lg mt-8">
                    ✨ <span className="font-bold">enefetito</span> is the premier NFT marketplace built on the Base network, offering lightning-fast transactions and minimal fees. Our platform provides a seamless experience for creators and collectors alike.
                  </p>
                  <p className="text-center text-lg">
                    🚀 Built with performance in mind, our marketplace leverages the power and security of the Base network to ensure your digital assets are safe while providing the best user experience in the NFT space.
                  </p>
                  <p className="text-center text-lg">
                    💎 Join thousands of artists and collectors who have already discovered the benefits of trading NFTs on <span className="font-bold">enefetito</span> - where creativity meets efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Browse our curated collection of NFTs in the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Marketplace
                </Link>{" "}
                section.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                View and manage your NFT collection in the{" "}
                <Link href="/myNFTs" passHref className="link">
                  My NFTs
                </Link>{" "}
                section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
