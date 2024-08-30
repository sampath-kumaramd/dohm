'use client';
import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import homePageFormBg from '../../../public/background/home-page-form.svg';
import GradientText from '../ui/GradientText';

interface DeveloperBookingFormProps {
  showSelectionButtons?: boolean;
}

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  language: z.string().min(1, 'Language is required'),
  urgency: z.string().min(1, 'Urgency is required'),
  duration: z.string().min(1, 'Duration is required'),
});

type FormValues = z.infer<typeof formSchema>;

const DeveloperBookingForm: React.FC<DeveloperBookingFormProps> = ({
  showSelectionButtons = false,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      language: '',
      urgency: '',
      duration: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle form submission here
  };
  const [selectedOption, setSelectedOption] = useState('developer');

  const renderContent = () => {
    if (selectedOption === 'developer') {
      return (
        <>
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">
            BOOK A{' '}
            <span className="text-orange-500">
              <GradientText gradientColors={['#d57a0e', '#eaaf44']}>
                DEVELOPER
              </GradientText>
            </span>
          </h1>
          <p className="text-gray-600 sm:text-xl text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi
            molestie cursus sagittis.
          </p>
          <div className="bg-white rounded-lg p-4 mb-4 shadow-[0_16px_65px_rgba(0,0,0,0.08)]">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ms-4">
                <div className="font-bold">EMAIL</div>
                <div className="font-light">dhomagency@mail.com</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-[0_16px_65px_rgba(0,0,0,0.08)]">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ms-4">
                <div className="font-bold">CONTACT</div>
                <div className="font-light">999-888-666</div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (selectedOption === 'query') {
      return (
        <>
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">
            CONTACT{' '}
            <span className="text-orange-500">
              <GradientText gradientColors={['#d57a0e', '#eaaf44']}>
                US
              </GradientText>
            </span>
          </h1>
          <p className="text-gray-600 sm:text-xl text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur. Orci egestas enim nisi
            molestie cursus sagittis.
          </p>
          <div className="bg-white rounded-lg p-4 mb-4 shadow-[0_16px_65px_rgba(0,0,0,0.08)]">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ms-4">
                <div className="font-bold">EMAIL</div>
                <div className="font-light">contactus@mail.com</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-[0_16px_65px_rgba(0,0,0,0.08)]">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ms-4">
                <div className="font-bold">CONTACT</div>
                <div className="font-light">999-888-777</div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <section id="developer-booking-form" className="sm:py-16 relative">
      <Image
        unoptimized
        src={homePageFormBg.src}
        alt="Form Background"
        width={400}
        height={400}
        className="absolute sm:left-96 sm:-top-10"
      />
      <div className="relative grid sm:grid-cols-8 grid-cols-1 justify-between p-8 sm:gap-36 gap-16 min-h-[50vh] container">
        <div className="sm:col-span-4 items-center flex">
          <div className="w-full">
            {showSelectionButtons && (
              <div className="inline-flex mb-4 bg-white p-3 rounded-full shadow-md shadow-gray-200">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedOption === 'developer'
                      ? 'bg-gradient-to-r from-orange to-orange-lighter text-white'
                      : 'text-black '
                  }`}
                  onClick={() => setSelectedOption('developer')}
                >
                  Book A Developer
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedOption === 'query'
                      ? 'bg-gradient-to-r from-orange to-orange-lighter text-white'
                      : 'text-black'
                  }`}
                  onClick={() => setSelectedOption('query')}
                >
                  General Query
                </button>
              </div>
            )}
            {renderContent()}
          </div>
        </div>
        <Card className=" sm:col-span-4 bg-gradient-to-br from-orange-light to-orange-lighter text-white  mx-auto  rounded-3xl">
          <CardContent className=" py-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jhone"
                            {...field}
                            className="bg-white text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="bg-white text-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jhonedoe@mail.com"
                          {...field}
                          className="bg-white text-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Language</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white text-black">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Urgency</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white text-black">
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="2-3 weeks"
                          {...field}
                          className="bg-white text-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-full border-1 border-white py-6"
                >
                  Send message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeveloperBookingForm;
