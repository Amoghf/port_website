import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Text and Illustration */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-x-4 text-primary text-lg mb-4">
              <span className="w-12 h-1 bg-primary"></span>
              <div>Say Hello</div>
            </div>

            <h1 className="text-3xl font-bold max-w-md mb-6">Let&rsquo;s Work Together</h1>
            <p className="text-lg max-w-md mx-auto lg:mx-0">
              I would love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out. Let&rsquo;s create something amazing together.
            </p>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-cover bg-center h-64 lg:h-80 xl:h-96">
            {/* Illustration */}
          </div>
        </div>

        {/* Info Text */}
        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-start gap-y-4 text-base lg:text-lg">
            <div className="flex items-center gap-x-4">
              <MailIcon size={24} className="text-primary dark:text-gray-300" />
              <div className="text-gray-800 dark:text-gray-300">amogh.firke@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-4">
              <HomeIcon size={24} className="text-primary dark:text-gray-300" />
              <div className="text-gray-800 dark:text-gray-300">Bangalore, Karnataka</div>
            </div>
            <div className="flex items-center gap-x-4">
              <PhoneCall size={24} className="text-primary dark:text-gray-300" />
              <div className="text-gray-800 dark:text-gray-300">+91 9373627322</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
