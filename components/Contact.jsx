import { useForm, ValidationError } from "@formspree/react"
import { useState, useEffect } from "react"
import AnimatedText from "./AnimatedText";
import { FaCheckCircle } from "react-icons/fa"

const Contact = () => {
  const [state, handleSubmit] = useForm("mgveynlj");

  // States for form input

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  };

  // Clear the form after submission
  
  useEffect(() => {
    if(state.succeeded) {
      setShowIcon(true)
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
         message: "",
      });
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000)
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // handle form submission

  const handleFormSubmit = (e)=> {
    e.preventDefault();
    handleSubmit(formData);
  }
  return (
    <section className='pt-8 xl:pt-12 pb-32' id='contact'>
        <div className="container mx-auto">
          <div className="flex flex-col items-center xl:flex-row gap-16">
            <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
              <AnimatedText text="Let's Work Together" textStyles="h2 mb-12 text-center xl:text-left" />
              {/* form */}
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full max-w-[480px]">
                {/* First name and last name field */}
                <div className="flex gap-8">
                  {/* first name */}
                  <div className="flex-1">
                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-primary">
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input onChange={handleChange} type="text" name="firstname" id="firstname" value={formData.firstname} className="input" placeholder="First Name" required />
                  </div>
                  {/* Last name */}
                  <div className="flex-1">
                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-primary">
                      Last Name <span className="text-accent">*</span>
                    </label>
                    <input onChange={handleChange} type="text" name="lastname" id="lastname" value={formData.lastname} className="input" placeholder="Last Name" required />
                  </div>
                </div>
                {/* email Field */}
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input onChange={handleChange} type="text" name="email" id="email" value={formData.email} className="input" placeholder="Email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                </div>
                <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input onChange={handleChange} type="text" name="phone" id="phone" value={formData.phone} className="input" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea onChange={handleChange} name="message" id="message" value={formData.message} className="textarea" placeholder="Leave me a message"
                    rows="5"
                    required />
                    <ValidationError prefix="message" field="message" errors={state.errors}/>
                </div>
                {/* submit button */}
                <button type="submit" disabled={state.submitting} className="btn btn-accent flex items-center justify-center gap-2">
                  {
                    state.submitting ? (
                      <span>Sending....</span>
                    ) : (
                      <>
                      <FaCheckCircle className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-100" : "opacity-0"
                      }`} />
                      {/* Button Text */}
                      <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100" }`}>Send message</span>
                      </>
                    )
                  }
                </button>
              </form>
            </div>
            <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
              <img src="/assets/contact/img.png" className="object-cover" fill quality={100} alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact