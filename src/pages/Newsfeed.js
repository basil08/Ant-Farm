import React, { useState } from "react";
import {
  Button,
  Flex,
  Text
} from "@chakra-ui/react";

import Sidebar from "../components/sidebar";
import FilterBand from "../components/filterBand";
import Navbar from "../components/navbar";
import CommentCard from "../components/commentCard";

import { AddIcon } from "@chakra-ui/icons";

function Newsfeed() {
  const [searchText, setSearchText] = useState();


  const handleAddCompanyToHeadlines = () => {

    // AWAIT: It is unclear if a modal should open or should redirect to a new page.
    console.log("Add company to headlines");
  }


  // dummy variable to reuse FilterBand
  // TODO: Refactor FilterBand to make this prop optional
  const categories = [
  ];

  const discussions = [
    {
      id: 1,
      author: 'Parth Sharma',
      avatarUrl: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      text: 'Irure excepteur enim exercitation. Lorem minim consequat sint commodo commodo enim. Laboris adipisicing sit non eu dolor reprehenderit qui non elit pariatur elit incididunt. Laborum sint ex eu ad qui elit incididunt nostrud mollit dolore. Ad mollit nostrud do veniam cupidatat nisi enim tempor ad ex aliqua velit sunt commodo.',
      links: [
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
      ],
      upvotes: 37,
      downvotes: 28,
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      id: 2,
      author: 'Parth Sharma',
      avatarUrl: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      text: 'Irure excepteur enim exercitation. Lorem minim consequat sint commodo commodo enim. Laboris adipisicing sit non eu dolor reprehenderit qui non elit pariatur elit incididunt. Laborum sint ex eu ad qui elit incididunt nostrud mollit dolore. Ad mollit nostrud do veniam cupidatat nisi enim tempor ad ex aliqua velit sunt commodo.',
      links: [
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
      ],
      upvotes: 12,
      downvotes: 35,
      timestamp: '2022-11-07T05:01:30+0000',
    },
  ];

  // dummy variable to reuse FilterBand
  // TODO: Refactor FilterBand to make this prop optional
  const handleFilterChange = () => { };

  const handleSearchTextChange = value => setSearchText(value);

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="Newsfeed"
            subtitle="Make money the right way, and see how your favourite ESG indicators are performing."
            user={{
              name: "Parth Sharma",
              profilePic: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }}
          />
        </Flex>

        <Flex ml="4" w="65%">
          <Flex w="100%" justifyContent={"space-between"}>

            <FilterBand
              categories={categories}
              handleFilterChange={handleFilterChange}
              isActive={0}
              searchText={searchText}
              handleSearchTextChange={handleSearchTextChange}
            />

            <Button onClick={handleAddCompanyToHeadlines} bg="brand.400" color="white" p="4">
              <Flex p="2">
                <AddIcon />
              </Flex>
              <Text>Add Company to your headlines</Text>
            </Button>
          </Flex>
        </Flex>

        <Flex m="4" flexDir={"column"} w="65%">
          {discussions.map((comment, index) => (
            <CommentCard comment={comment} key={index} />
          ))}
        </Flex>

      </Flex>
    </Flex>
  );
}

export default Newsfeed;