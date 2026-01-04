
import React from 'react';
import EnquiryForm from '../components/EnquiryForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-primary-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600">Let us begin planning your next extraordinary journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-8 h-full">
             <div className="bg-white p-8 shadow-lg rounded-[12px] flex-shrink-0">
                <h3 className="text-xl font-bold font-serif text-primary-900 mb-6">Contact Details</h3>
                
                <div className="flex items-start space-x-4 mb-6">
                   <MapPin className="text-gold-500 mt-1" />
                   <div>
                      <p className="font-bold text-primary-900 text-sm uppercase">Headquarters</p>
                      <p className="text-gray-600 text-sm">Kanke road, Lake Avenue, Lane No – 3,<br/>near Iskcon, Jharkhand, 834008 India</p>
                   </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                   <Phone className="text-gold-500" />
                   <div>
                      <p className="font-bold text-primary-900 text-sm uppercase">Phone / WhatsApp</p>
                      <p className="text-gray-600 text-sm">+91 89868 92922</p>
                   </div>
                </div>

                <div className="flex items-center space-x-4">
                   <Mail className="text-gold-500" />
                   <div>
                      <p className="font-bold text-primary-900 text-sm uppercase">Email</p>
                      <p className="text-gray-600 text-sm">hello.sosa777@gmail.com</p>
                   </div>
                </div>
             </div>
             
             {/* Live Map */}
             <div className="rounded-[12px] overflow-hidden shadow-lg border-2 border-white flex-grow min-h-[300px]">
                <iframe 
                  src="https://maps.google.com/maps?q=ISKCON+Temple+Ranchi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  title="Office Location"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <EnquiryForm className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
