import {Heading, Text} from "../components/Text.tsx";
import {t} from "i18next";
import type {MenuItem, Reference} from "../types/language.ts";
import React from "react";

export default function Home(): React.JSX.Element {
    return (
        <div className="min-h-screen flex flex-col gap-y-2">
            {/* Hero section */}
            <section className="relative bg-gray-50 rounded-lg">
                <div className="absolute inset-0">
                    <img
                        src="https://picsum.photos/1200/800"
                        alt="Kahvaltı Catering Hizmetleri"
                        className="w-full h-full object-cover opacity-50 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 rounded-lg"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <Heading size="5xl" weight="bold"
                             className="text-white leading-normal">{t('home.subtitle')}</Heading>
                    <Text size="2xl" weight="semibold" className="text-gray-300 mt-4">{t('home.subtitle2')}</Text>
                    <div className="mt-8">
                        <button
                            className='px-4 py-2 bg-brand text-wash rounded-md lg:hover:scale-105 lg:transition'>
                            {t('home.titlebutton')}
                        </button>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg">
                <div
                    className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 grid grid-cols-1 xl:grid-cols-4 gap-3">
                    <div className="col-span-1 xl:col-span-3">
                        <Text size="3xl" weight="bold" className="mb-4">
                            {t('home.aboutSection.title')}
                        </Text>
                        <Text size="lg" weight="semibold"
                              className="mb-6 leading-loose">{t('home.aboutSection.description')}</Text>
                    </div>
                    <div className="hidden xl:flex xl:col-span-1">
                        <div className="flex items-center justify-center">
                            <img src="https://picsum.photos/300/400" alt="Kahvaltı Catering Hizmetleri"
                                 className="w-full h-full"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Text size="3xl" weight="bold" className="text-gray-800 dark:text-white">
                        {t('home.menuSection.title')}
                    </Text>
                    <div className="w-32 h-1 mx-auto my-4 rounded-full bg-primary-500"></div>
                    <Text size="xl" weight="semibold" className="text-gray-500 dark:text-gray-300">
                        {t('home.menuSection.subtitle')}
                    </Text>
                    <div className="mt-16">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(t('home.menuSection.menu', {returnObjects: true}) as Array<MenuItem>).map((item, index) => (
                                <div key={index} className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg lg:hover:scale-105 lg:transition lg:hover:shadow-xl">
                                    <Text size="xl" weight="bold"
                                          className="text-gray-800 dark:text-white">{t(item.title)}</Text>
                                    <div className="w-20 h-1 my-2 bg-primary-500"></div>
                                    <Text size="md"
                                          weight="semibold"
                                          className="text-gray-500 dark:text-gray-300">
                                        {t(item.text)}
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials section */}
            <section className="bg-gray-100 dark:bg-gray-900 rounded-lg">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <Text size="3xl" weight="bold" className="mb-4">{t('home.referencesSection.title')}</Text>
                    <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-8">
                        {(t('home.referencesSection.references', {returnObjects: true}) as Array<Reference>).map((item, index) => (
                            <div key={index} className="group max-w-md mx-auto mt-10 hover:bg-gray-200 dark:hover:bg-gray-800 rounded p-2 transition-colors">
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                      <span
                                          className="px-2 bg-gray-100 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors">
                                        {t(item.username)}
                                      </span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <blockquote className="text-lg font-medium">
                                        “{t(item.text)}”
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}