import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="flex flex-col items-center justify-center  bg-gray-100 min-h-[70vh]">
          <div className="px-4 mx-auto max-w-screen-md bg-blue-100 rounded-xl ">
            <h2 className="heading text-center">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text_para ">
              {" "}
              Got a technical issue? Want to send feedback about beta version?{" "}
            </p>

            <form action="#" className="space-y-9">
              <div>
                <label htmlFor="name" className="form_label">
                  Name
                </label>
                <input type="text" id="name" className="form_input" />
              </div>
              <div>
                <label htmlFor="email" className="form_label">
                  Email
                </label>
                <input type="email" id="email" className="form_input" />
              </div>
              <div>
                <label htmlFor="message" className="form_label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form_input"
                  rows="4"
                ></textarea>
            </div>
            <div className="flex justify-center items-center mb-2">

              <button type="submit" className="btn mb-4">
                Send Message
              </button>
            </div>
            </form>
          </div>
        </section>
    </>
  );
}

export default Contact
