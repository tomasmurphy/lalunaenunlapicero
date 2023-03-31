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
                title="instagram"
                href="https://www.instagram.com/lalunaenunlapicero/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i> @lalunaenunlapicero{" "}
              </a>
            </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Contacto;
