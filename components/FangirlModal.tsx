import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import swal from "sweetalert";
import { TbDiamond } from "react-icons/tb";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/router";

export default function FangirlModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer === "mingyu") {
      swal("Mantapp!", "cie bisaan", "success", {
        buttons: {
          text: "oiya dong",
        } as any,
      }).then(() => {
        router.push("/carat");
      });
    } else {
      swal("Jawaban salah!", "hayo cari tau lagi :v", "error", {
        buttons: {
          text: "halsuiso",
        } as any,
      });
    }
  };
  return (
    <>
      <li
        key={Math.random()}
        className="bg-neutral-50/50 mb-3 shadow-mengShadow border-neutral-50 border-[1.5px] rounded-[60px] px-5 py-2">
        <button className="flex items-center" onClick={openModal}>
          <div className="rounded-full bg-white p-2 text-black">
            <TbDiamond />
          </div>
          <span className="ml-3 text-xl">FanGirl</span>
        </button>
      </li>

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
                      Dikunci ah :v
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-sernity-200 p-1 text-sm font-medium hover:bg-sernity-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      <GrFormClose className="text-base" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-base text-gray-500 mb-2">
                      Hint: Akita Sound!
                    </p>
                  </div>
                  <form className="mb-5 mt-2" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className=" mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                      placeholder="Siapa hayo?"
                      value={answer}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(e.target.value)
                      }
                    />
                    <button
                      type="submit"
                      className="bg-sernity-500 flex justify-center w-full py-2 rounded-md">
                      Kirim
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
