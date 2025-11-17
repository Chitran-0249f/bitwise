import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Project with BIM?</h2>
          <p className="text-gray-300 text-xl mb-12">
            Partner with BIMWise Consultants for cutting-edge BIM solutions and engineering excellence.
            Let's build the future together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919560683700"
              className="bg-white text-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <div className="text-white">
                <div className="text-sm text-gray-300 mb-2">Call Us</div>
                <a href="tel:+919560683700" className="text-lg font-semibold hover:text-primary transition-colors">
                  +91-9560683700
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <div className="text-white">
                <div className="text-sm text-gray-300 mb-2">Email Us</div>
                <a href="mailto:bd@bimwiseconsultants.com" className="text-lg font-semibold hover:text-primary transition-colors break-all">
                  bd@bimwiseconsultants.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
