import {FormContacto} from './FormContacto'

const Contacto = () => {
  
  
  return (
    <>
      
      <section id="contacto" className="overflow-hidden ">
        <div className="transparencia">
          <div className="orden col-md-4 col-12">
            <div className="col-12">
              <FormContacto />
            </div>
            <div className="mb-5 text-center col-12">
            <a
                title="email"
                href="mailto:lalunaenunlapicero@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope"></i> lalunaenunlapicero@gmail.com
              </a>
                          </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Contacto;
