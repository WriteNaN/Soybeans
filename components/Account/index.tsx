"use client";

import React, { useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { MdArrowBackIos, MdSearch } from "react-icons/md";
import useLocalStorageState from "use-local-storage-state";

export default function Profile() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [$, setAccountView] = useLocalStorageState("current-view", {
    defaultValue: false,
  });

  return (
    <div className="flex justify-center items-center h-screen relative w-screen bg-blue-600/10 glow-blue">
      <Head>
        <title>Soybeans Finance - Account</title>
      </Head>

      <div className="fixed inset-0 flex items-center justify-center audiowide">
        <nav className="bg-blue-700/30 h-12 w-full absolute right-0 top-0 flex items-center justify-end">
          <button className="mx-4 flex items-center hover:opacity-60" onClick={() => setAccountView(false)}>
            <MdArrowBackIos className="text-white" />
            <p className="p-0 mx-0 text-white">Back</p>
          </button>
        </nav>
      </div>
    </div>
  );
}
