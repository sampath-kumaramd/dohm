'use client';
import React, { useEffect, useState } from 'react';

import { Star } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

interface TestimonialProps {
  content: string;
  author: string;
  date: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  content,
  author,
  date,
  avatar,
}) => (
  <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
    <CardContent className="p-6">
      <Image
        src="/google-logo.svg"
        alt="Google"
        width={40}
        height={40}
        className="mb-4"
      />
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current text-[#ff9e22]" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <Image
          src={avatar}
          alt={author}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ClientTestimonialsCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis. enim nisi molestie cursus.',
      author: 'Jane Doe',
      date: 'Aug 1, 2024',
      avatar: '/avatars/jane-doe.jpg',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis. enim nisi molestie cursus.',
      author: 'John Smith',
      date: 'Aug 1, 2024',
      avatar: '/avatars/john-smith.jpg',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis. enim nisi molestie cursus.',
      author: 'Emily Johnson',
      date: 'Aug 1, 2024',
      avatar: '/avatars/emily-johnson.jpg',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis. enim nisi molestie cursus.',
      author: 'Jane Doe',
      date: 'Aug 1, 2024',
      avatar: '/avatars/jane-doe.jpg',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis. enim nisi molestie cursus.',
      author: 'John Smith',
      date: 'Aug 1, 2024',
      avatar: '/avatars/john-smith.jpg',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi molestie cursus sagittis. enim nisi molestie cursus.',
      author: 'Emily Johnson',
      date: 'Aug 1, 2024',
      avatar: '/avatars/emily-johnson.jpg',
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      api?.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          WHAT OUR <span className="text-orange-400">CLIENTS</span> SAY
        </h2>
        <Carousel
          setApi={setApi}
          className="w-full max-w-4xl mx-auto"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center mt-8">
          {[...Array(count)].map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full mx-1 ${
                i === current ? 'bg-gradient-to-br from-orange-light to-orange-lighter' : 'bg-gradient-to-br from-[#f7e5cf] to-[#fcf1dc]'
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsCarousel;
