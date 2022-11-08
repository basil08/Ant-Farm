import React from 'react';
import { Flex } from '@chakra-ui/react';
import CommentCard from './commentCard';

export default function GeneralDiscussionThread({ ticker }) {
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
  return (
       <Flex flexDir={'column'} m="4">
      {/* {discussions.map((comment, index) => (
        <CommentCard
          comment={comment}
          key={index}
        />
      ))} */}
      {discussions.map((comment, index) => (
        <CommentCard comment={comment} key={index } />
      ))}
    </Flex>
  );
}
