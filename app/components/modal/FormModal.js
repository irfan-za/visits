import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import supabase from "../../api/supabase";
import Link from "next/link";
import { checkUrl } from "@/utils/checkValidUrl";
import { generateRandomText } from "@/utils/generateRandomString";

export default function FormModal({
  open,
  setOpen,
  title,
  currentUserId,
  currentEditData,
  setCurrentEditData,
  shortUrl,
  setShortUrl,
  longUrl,
  setLongUrl,
}) {
  const [longUrlError, setLongUrlError] = useState(false);
  const [validUrl, setValidUrl] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    console.log(longUrl);

    return async () => {
      if (currentEditData) {
        const { data: url, error } = await supabase
          .from("urls")
          .select()
          .eq("id", currentEditData)
          .single();
        if (!error) {
          setLongUrl(url.long_url);
          setShortUrl(url.short_url);
        }
      }
    };
  }, [currentEditData]);

  const submitForm = async (e) => {
    e.preventDefault();
    checkUrl(longUrl, setValidUrl, setLongUrl);

    if (currentEditData) {
      editUrl(currentEditData);
      setOpen(false);
    } else {
      createUrl();
      setOpen(false);
    }
  };
  const editUrl = async () => {
    const { error } = await supabase
      .from("urls")
      .update({
        short_url: shortUrl,
        long_url: longUrl,
        supabase_auth_id: currentUserId,
      })
      .eq("id", currentEditData);
    if (error) {
      alert(error.message);
    }
  };
  const createUrl = async () => {
    let data = {
      short_url: generateRandomText(),
      long_url: longUrl,
      supabase_auth_id: currentUserId,
    };
    if (shortUrl) {
      data = {
        short_url: shortUrl,
        long_url: longUrl,
        supabase_auth_id: currentUserId,
      };
    }
    console.log(data);
    const { error } = await supabase.from("urls").insert(data);
    if (error) {
      alert(error.message);
    }
  };

  // clear form
  if (!open) {
    setShortUrl("");
    setLongUrl("");
    setCurrentEditData(null);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 dark:bg-gray-700 sm:p-6 sm:pb-4">
                  <Dialog.Title
                    as="h3"
                    className="mb-2 w-full text-center text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Dialog.Title>
                  <form onSubmit={submitForm}>
                    <div className="grid gap-y-4">
                      <div>
                        <label
                          htmlFor="longUrl"
                          className="mb-2 block text-sm font-semibold dark:text-gray-300"
                        >
                          Url Panjang
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="longUrl"
                            name="longUrl"
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                            className="block w-full rounded-lg border border-gray-400 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            aria-describedby="longUrl-error"
                            placeholder="https://website.com/123"
                          />
                          {longUrlError && (
                            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
                              <svg
                                className="h-5 w-5 text-red-500"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        {longUrlError && (
                          <p
                            className="error= "
                            error="text-xs text-red-600 mt-2"
                            id="longUrl-error"
                          >
                            Masukkan tautan Url
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="customUrl"
                          className="mb-2 block text-sm font-semibold dark:text-gray-300"
                        >
                          Url Kustom
                        </label>
                        <div className="flex items-center">
                          <span className="text-lg font-medium">
                            https://visits.id/
                          </span>
                          <input
                            type="text"
                            id="customUrl"
                            name="customUrl"
                            value={shortUrl}
                            onChange={(e) => setShortUrl(e.target.value)}
                            placeholder="custom-url"
                            className="block w-full rounded-lg border border-gray-400 px-3 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-gray-600"
                            aria-describedby="customUrl-error"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 dark:bg-gray-700 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 sm:ml-3 sm:w-auto"
                        >
                          Simpan
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-600 dark:text-gray-300 sm:mt-0 sm:w-auto"
                          onClick={() => {
                            setOpen(false);
                          }}
                          ref={cancelButtonRef}
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
