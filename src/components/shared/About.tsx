import Banner from "../auth/Banner";


const About: React.FC = () => {
    return (
        <div className=" ">
        <Banner path="/assets/signInBanner.png"/>
        <div className="w-5/6 mx-auto">
           <h3 className="font-roboto font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-4 leading-[124%]">About us</h3>
           <p className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl ">Welcome to Discount Me. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you Hello world and Discount me the software development. By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.</p>

           <h3 className="font-roboto text-xl sm:text-2xl md:text-3xl font-bold leading-[124%] my-4">→ Scope of Service</h3>
           <p className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl my-2 w-6/8">a. Discount Me will provide custom logo design services to the Client based on the specifications provided by the Client.</p>
           <p className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl my-2 w-5/6">b. The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.</p>

           <h3 className="font-roboto text-xl sm:text-2xl md:text-3xl font-bold leading-[124%] my-4">→ Copyright and Ownership</h3>
           <p className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl my-2 w-5/6">a. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider.</p>
           <p className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl my-2 w-5/6">b. Final payment ensures that only the agreed design becomes the client is property. Any previous ideas/concepts remain the property of The Service Provider, unless any prior agreement has been made.</p>
           <p className="font-kumbh-sans text-base sm:text-lg md:text-xl lg:text-2xl mt-2 mb-10 w-5/6">c. The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.</p>
        </div>
     </div>
    )
}

export default About;