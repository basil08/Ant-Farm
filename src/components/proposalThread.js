import React from "react";
import { Flex } from "@chakra-ui/react";
import ProposalCard from "./proposalCard";


export default function ProposalThread({ ticker, handleReportConfirmationModal }) {


  // const proposals = getProposals(ticker);
  const proposals = [
    {
      ticker: ticker,
      action: "BUY",
      days: 30,
      text: "Irure excepteur enim exercitation. Lorem minim consequat sint commodo commodo enim. Laboris adipisicing sit non eu dolor reprehenderit qui non elit pariatur elit incididunt. Laborum sint ex eu ad qui elit incididunt nostrud mollit dolore. Ad mollit nostrud do veniam cupidatat nisi enim tempor ad ex aliqua velit sunt commodo.",
      links: [
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
      ],
      upvotes: 37,
      downvotes: 28,
      timestamp: "2022-11-07T05:01:30+0000"
    },
    {
      ticker: ticker,
      action: "SELL",
      days: 12,
      text: "Irure excepteur enim exercitation. Lorem minim consequat sint commodo commodo enim. Laboris adipisicing sit non eu dolor reprehenderit qui non elit pariatur elit incididunt. Laborum sint ex eu ad qui elit incididunt nostrud mollit dolore. Ad mollit nostrud do veniam cupidatat nisi enim tempor ad ex aliqua velit sunt commodo.",
      links: [
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
        { title: "Elon Musk agrees to buy Twitter at original offer price", url: "https://twitter.com"},
      ],
      upvotes: 12,
      downvotes: 54,
      timestamp: "2022-10-07T05:01:30+0000"
    }
  ];

  return (
    <Flex flexDir={"column"} m="4">
      {proposals.map((proposal, index) => (
        <ProposalCard proposal={proposal} key={index} handleReportConfirmationModal={handleReportConfirmationModal} />
      ))}
    </Flex>
  )
}