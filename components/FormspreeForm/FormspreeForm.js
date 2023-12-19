import { ValidationError } from "@formspree/react";
import { useForm } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({formId}) => {
    console.log("FORM ID: ", formId);
    const [state, handleSubmit] = useForm(formId);
    if (state.succeeded) {
        return <p className="max-w-[1440px] my-5 mx-[50px] text-xl">Thanks for your message!  I&#39;ll be in touch soon. <span class="wave">👋</span></p>;
    }
    return (
        <div className="min-w-[300px] max-w-[720px] mx-[30px] my-5">
            <form onSubmit={handleSubmit}>
            <div className="mt-5 mb-[5px]">
                <label htmlFor="email">
                    <span className="font-bold font-secondary">Email Address:</span>
                </label>
            </div>
            <div>
                <Input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="mt-5 mb-[5px]">
                <label htmlFor="message">
                    <span className="font-bold font-secondary">Message:</span>
                </label>
            </div>
            <div>
                <textarea
                    className="input-hover w-[250px] min-h-[175px] border-2 border-stone-950 dark:border-stone-300 p-1"
                    id="message"
                    name="message"
                    placeholder="Your message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <div className="mt-5">
                <button className="btn hover:rainbow-fill" id="button" type="submit" disabled={state.submitting}>
                Submit
                </button>
            </div>
            </form>
        </div>
    );
};