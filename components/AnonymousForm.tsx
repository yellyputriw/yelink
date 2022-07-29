import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { TbLock } from "react-icons/tb";
import axios from "axios";

const AnnonymousModal = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    e.preventDefault();

    const data = {
      Message: message,
    };
    console.log(data);
    axios
      .post(
        "https://sheet.best/api/sheets/be2c94e2-bb4e-40e9-be4b-44aa40441892",
        data
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    setMessage("");
    setIsLoading(false);
  };

  return (
    <>
      <button
        className="flex items-center bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-[60px] px-5 py-2"
        onClick={openModal}>
        <div className="rounded-full bg-white p-2 text-black">
          <TbLock />
        </div>
        <span className="ml-3 text-xl">Annonymous Form</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between mb-6">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-semibold leading-6 text-gray-900 text-center">
                      Annonymous Form
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-sernity-200 p-1 text-sm font-medium hover:bg-sernity-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      <GrFormClose className="text-base" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-base text-gray-500 text-center mb-2">
                      Hi! Kalau ada kritik atau saran. Tulis disini yaa!
                    </p>
                  </div>
                  <form className="mb-10 mt-2" onSubmit={handleSubmit}>
                    <textarea
                      className="
                      mb-3
                      block
                      w-full
                      h-40
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                      text-sm
                      resize-none
                    "
                      placeholder="Silahkan tulis pesan ..."
                      value={message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target.value)
                      }></textarea>
                    <button
                      type="submit"
                      className="bg-sernity-500 flex justify-center w-full py-2 rounded-md">
                      {isLoading ? (
                        <RiLoader2Fill className="text-base animate-spin" />
                      ) : (
                        <span>Kirim</span>
                      )}
                    </button>
                  </form>
                  <div className="mt-4">
                    <p className="text-xs text-gray-500">
                      *Selama kalian tidak memasukan nama di dalam textarea, aku
                      tidak akan mengetahui kalian xD
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Nb. Aku hanya developer bukan hackers :v
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AnnonymousModal;
