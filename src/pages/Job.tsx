import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useMemo, useState} from "react";
import Icon from "../components/Icon.tsx";
import {LazyLoadImage} from "react-lazy-load-image-component";
import c from "classnames";
import fairs from 'utils/fairs.json';
import {Heading, Text} from "../components/Text.tsx";
export default function Job() {
    return (
        <div className='w-full flex flex-col gap-y-4'>
            <Heading children='İş İlanı' className='text-brand' weight='bold' size='4xl'/>
            <div className='w-full flex flex-col gap-y-4'>
                <Modal/>
            </div>
        </div>
    )
}

function Modal(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const [page, setPage] = useState<number>(1)

    const pages: JSX.Element[] = [
        <FairPage/>,
        <Placepage/>,
        <Hostpage/>,
        <InfoPage/>
    ]

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="bg-brand px-4 py-2 w-full outline-none focus:outline-none text-white rounded-md text-xl font-semibold"
                >
                    Teklif Al
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-1 h-full" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="h-full fixed inset-0 overflow-y-auto z-30">
                        <div className="flex min-h-full items-center justify-center text-center z-30">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="relative z-30 block w-full min-h-screen transform overflow-hidden flex flex-col justify-between bg-light dark:bg-dark p-8 text-left"
                                    as='div'>
                                    <div className='flex justify-between gap-x-4 mb-4'>
                                        <div className='text-brand text-sm font-bold absolute top-2 left-8'>
                                            <span
                                                className='font-black'>%{((page / pages.length) * 100).toFixed(0)}</span> tamamlandı
                                        </div>
                                        <div className='absolute top-0 left-0 right-0 w-full h-1 bg-brand'
                                             style={{
                                                 width: `${(page / pages.length) * 100}%`,
                                                 transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s'
                                             }}/>
                                        <Heading children='Teklif Al' className='text-brand' size='5xl'
                                                 weight='extrabold'/>
                                        <button onClick={() => setIsOpen(false)}
                                                className='flex items-center justify-center  outline-none'>
                                            <Icon children='close' className='text-brand' size='4xl'/>
                                        </button>
                                    </div>
                                    <div className='w-full h-full flex flex-1'>
                                        {pages[page - 1]}
                                    </div>
                                    <div className='w-full flex items-center justify-between gap-x-4'>
                                        <button
                                            disabled={page === 1}
                                            onClick={() => setPage(page - 1)}
                                            className='disabled:opacity-50 w-1/2 flex items-center justify-center w-12 h-12 rounded-md text-brand font-bold'>
                                            <Icon children='arrow_back'/>
                                        </button>
                                        {page !== pages.length ? (<button
                                                onClick={() => setPage(page + 1)}
                                                className='disabled:opacity-50 bg-brand/80 text-light dark:text-dark disabled:text-brand disabled:dark:text-brand disabled:bg-transparent w-1/2 flex items-center justify-center w-12 h-12 rounded-md text-brand font-bold'>
                                                <Icon children='arrow_forward'/>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className='flex items-center gap-x-4 w-full bg-brand justify-center w-12 h-12 rounded-md text-light font-bold'>
                                                <Icon children='check'/> Teklif Al
                                            </button>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

function FairPage(): JSX.Element {

    //const [selected, setSelected] = useState<number>()
    /*const handleFairSelect = (index: number) => {
        setSelected(index)
        setDisabled(true)
        setPaginationData({
            ...paginationData,
            fairPage: index
        })
    }*/

    return (
        <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-1000 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-1000 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <div className='w-full flex flex-col gap-y-4'>
                <Heading children='Fuarlarımız' className='text-brand' size='3xl' weight='extrabold'/>
                <p className='text-xl font-semibold'>Fuarlarımızdan birini seçin</p>
                <ul className='w-full flex flex-col gap-y-4'>
                    {fairs.map((fair, index: number) => (
                        <li
                            key={index}
                            className={c(
                                'w-full flex flex-col gap-y-4 p-4 rounded-md cursor-pointer',
                                //selected === index ? 'bg-brand text-light' : 'bg-light dark:bg-dark text-dark dark:text-light'
                            )}>
                            <div className='flex justify-between items-center gap-x-4'>
                                <LazyLoadImage src={fair.image} alt={fair.name}
                                               className='rounded-md h-16 bg-white rounded p-2'/>
                                <div className='flex flex-col gap-y-2'>
                                    <h1 className='text-xl font-semibold'>
                                        {fair.name}
                                    </h1>
                                    <p className='text-lg font-normal'>
                                        {new Date(fair.date).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Transition.Child>
    )
}

function Placepage(): JSX.Element {
    const [text, setText] = useState<string>("");

    const error = useMemo(() => {
        if (text.length > 0 && parseInt(text) !== 0) {
            if (parseInt(text) > 1000) {
                return "Stant metrekareniz 1000 metrekareden fazla olamaz";
            } else {
                return `Stant metrekareniz: ${text} m2`;
            }
        } else if (parseInt(text) === 0) {
            return "Stant metrekareniz 0 metrekare olamaz";
        } else {
            return "Stant metrekarenizi giriniz";
        }
    }, [text]);

    /*const {placePage} = paginationData;
    const newPaginationData = {...paginationData, placePage: {...placePage, text, setText, error}};
    setPaginationData(newPaginationData);

    useEffect(() => {
        if (parseInt(text) > 1000 || parseInt(text) === 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [text, setDisabled]);
     */

    return (
        <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-1000 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-1000 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <div className='w-full flex flex-col gap-y-4'>
                <Heading children='Stant Metrekaresi' className='text-brand mt-8' size='3xl' weight='extrabold'/>
                <Text children='Stant metrekarenizi giriniz' className='text-xl font-semibold'/>
                <div className='w-full flex flex-col gap-y-4'>
                    <div className='relative'>
                        <input
                            type='number'
                            className={c(
                                'w-full h-12 rounded-md border-2 text-black px-2 border-brand focus:outline-none',
                                {'border-red-400': text.length > 0 && parseInt(text) > 1000 || parseInt(text) === 0},
                                {'border-brand': text.length > 0 && parseInt(text) <= 1000},
                            )}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='Giriniz...'
                        />
                        <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                            <span className='text-gray-400 text-sm'>m<sup>2</sup></span>
                        </div>
                    </div>
                    <span className={c(
                        'text-md',
                        'font-semibold',
                        {'text-brand': text.length > 0 && parseInt(text) <= 1000},
                        {'text-red-400': text.length > 0 && parseInt(text) > 1000 || parseInt(text) === 0},
                    )}>{error}</span>
                </div>
            </div>
        </Transition.Child>
    )
}

function Hostpage(): JSX.Element {

    const hostes = [...Array(10).keys()]

    return (
        <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-1000 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-1000 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <div className='w-full flex flex-col gap-y-4'>
                <Heading children='Hostes Sayısı' className='text-brand' size='3xl' weight='extrabold'/>
                <Text children='Kaç hostes istediğinizi seçin' className='text-xl font-semibold'/>
                <div className='w-full flex flex-col gap-y-4'>
                    {hostes.map((_, index: number) => (
                        <div key={index} className='w-full flex items-center gap-x-4'>
                            <input
                                type="radio"
                                name='hostes'
                                id={`hostes-${index}`}
                                className='form-radio w-6 h-6 rounded-md'
                            />
                            <label
                                htmlFor={`hostes-${index}`}
                                children={`${index + 1} Hostes`}
                                className='text-lg font-semibold'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Transition.Child>
    )
}

function InfoPage(): JSX.Element {

    return (
        <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-1000 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-1000 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <div className='w-full flex flex-col gap-y-4'>
                <Heading children='Firma bilgileri' className='text-brand' size='3xl' weight='extrabold'/>
                <div className='w-full flex flex-col gap-y-4'>
                    <input placeholder='Firma adınızı giriniz...' type="text"
                           className='w-full p-4 rounded-md bg-white border border-brand dark:bg-dark text-brand outline-none placeholder:text-brand'/>
                </div>
            </div>
        </Transition.Child>
    )
}

/**
 * Fuar seçicek
 * Metrekare seçicek
 * sıcak yemek istiyor mu
 * stantta görevli hostes sayısı
 */