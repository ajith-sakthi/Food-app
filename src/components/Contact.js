import { CONTACT_US_IMG_URL } from "../utils/constants";

const Contact = () => {
  return (
    <div className="text-center flex justify-center mt-[7%] ml-[18%]">
      <div className="w-2/4">
        <div>
          <img className="w-2/4 rounded-lg" alt="Contact-image" src={CONTACT_US_IMG_URL} />
        </div>
        <div className="w-2/4">
            <a href="https://www.linkedin.com/in/ajithkumar-ravi-" target="_blank"><h1 className="text-xl"><span className="text-indigo-600 font-bold">LinkedIn</span> <span className="underline underline-offset-4 italic">www.linkedin.com/in/ajithkumar-ravi-</span></h1></a>
            <a href="https://github.com/ajith-sakthi" target="_blank"><h1 className="text-xl mt-4"><span className="text-indigo-600 font-bold">Git-Hub</span> <br></br><span className="underline underline-offset-4 italic">https://github.com/ajith-sakthi</span></h1></a>
        </div>
      </div>
      {/* <h2 className="my-2">Hey dev's contact us by curiousdev@gmail.com</h2> */}
    </div>
  );
};
export default Contact;
