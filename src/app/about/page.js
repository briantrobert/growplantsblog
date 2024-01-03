'use client'
import { useState } from "react"
import Format from "@/layout/format";
import Toast from "@/components/ui/toast";
import { sendContatcForm } from "@/lib/api";

function About() {

    const initValues = {
        name: "",
        message: ""
    }

    const initState = { values: initValues };
    const [state, setState] = useState(initState);
    const [openToast, setOpenToast] = useState(false);
    const { values, message, error = false } = state;

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }))

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setState((prev) => ({
            ...prev,
            // isLoading: true
        }));

        try {

            const data = await sendContatcForm(values);
            // await fetch('/api/contact', {
            //    method: 'post',
            //    body: JSON.stringify(values)
            // });
            setState(initState);
            setState((prev) => ({
                ...prev,
                // isLoading: true
                message: "Thanks to send a message.",
                error: false,
            }));
            setOpenToast(true);
        } catch (error) {
            setState((prev) => ({
                ...prev,
                // isLoading: true
                error: true,
                message: "Something went wrong",
            }));
            setOpenToast(true);
        }
    }

    return (
        <Format>
            <section className="container mx-auto md:px-2 py-10 w-1/2">
                <div className="post py-10">
                    <h1 className="font-semibold text-3xl text-center pb-5">
                        About this page
                    </h1>
                    <p className="text-gray-600 text-lg text-center">Within this page we can learn much more about planting especial case when we using flowerpot,
                        this page gather all related info for many scenario when you decide to grow your plants. Its other way
                        to keep in mind when you try to sow your plants. This page its base on many resourses of research taking care of the
                        information provided such as testimonials, research references and so on. Thanks for coming.</p>
                    <p className="text-gray-600 text-lg text-center pt-5">Enjoy your visit.</p>
                </div>
                <div className="post py-10">
                    <h1 className="font-semibold text-2xl text-center pb-5">
                        Contact me
                    </h1>
                </div>
                <div className="flex justify-center items-center w-full h-full">
                    <div className="rounded-xl border-gray-500 shadow-2xl w-full">
                        <div className="m-8">
                            <form method="post" onSubmit={onSubmitForm}>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-semibold text-lg">Name <span className="text-red-500">*</span></label>
                                    <input className="py-2 rounded-lg px-1 mt-1 text-black" required type="text" name="name" value={values.name} onChange={handleChange} placeholder="Jhon Doe" />
                                </div>
                                <div className="flex flex-col gap-1 pt-2">
                                    <label className="font-semibold text-lg">Message <span className="text-red-500">*</span></label>
                                    <textarea className="py-2 rounded-lg px-1 mt-1 text-black" name="message" required value={values.message} onChange={handleChange} placeholder="Message you like about" />
                                </div>
                                <div className="flex justify-center items-center mt-10">
                                    <button value="Send"
                                        type="submit"
                                        className="py-2 bg-orange-600 text-gray-900 w-full rounded-xl text-lg transition-all ease-in-out font-semibold hover:scale-105 active:scale-95"
                                        disabled={!values.name || !values.message}
                                    >Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Toast onOpen={openToast} error={error} message={message} closeToast={setOpenToast}/>
        </Format>
    );
}

export default About
