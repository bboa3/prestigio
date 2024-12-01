import contact11Img from '@/assets/img/icon/contact_1_1.svg';
import contact12Img from '@/assets/img/icon/contact_1_2.svg';
import contact13Img from '@/assets/img/icon/contact_1_3.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact: React.FC = () => {

  return (
    <div className="space2">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="pe-xxl-4 me-xl-3 text-center text-xl-start mb-40 mb-lg-0">
              <div className="title-area mb-32">
                <h2 className="sec-title2">Entrar em contacto</h2>
                <p className="sec-text">Entre em contacto conosco para enviar suas sugestões, esclarecer dúvidas ou compartilhar informações. Estamos aqui para ouvir você e garantir uma comunicação rápida e eficiente.</p>
              </div>
              <div className="contact-feature-wrap">
                <div className="contact-feature">
                  <div className="box-icon">
                    <Image src={contact11Img} alt="icon" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title-22">Nosso endereço</h3>
                    <p className="box-text">Street Parker Rd. Allentown, New Mexico 31134 </p>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="box-icon">
                    <Image src={contact12Img} alt="icon" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title-22">Endereço eletrónico</h3>
                    <p className="box-text">
                      <Link target="_blank" rel="noreferrer" href="mailto:correiodamanha@tvcabo.co.mz">
                        correiodamanha@tvcabo.co.mz
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="contact-feature">
                  <div className="box-icon">
                    <Image src={contact13Img} alt="icon" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title-22">Número de telefone</h3>
                    <p className="box-text">
                      <a href="tel:+25821305326">+258 21 305 326</a>
                      <a href="tel:+7025550122">+258 84 308 5360</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="quote-form-box">
              <h4 className="form-title">Enviar mensagem</h4>
              <form action="mail.php" method="POST" className="contact-form ajax-contact">
                <div className="row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Seu nome" />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Endereço eletrônico" />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="tel" className="form-control" name="number" id="number" placeholder="Número de telefone" />
                  </div>
                  <div className="form-group col-md-6">
                    <select name="subject" id="subject" className="form-select">
                      <option value="" disabled selected hidden>Selecionar o assunto</option>
                      <option value="Escrever um artigo">Escrever um artigo</option>
                      <option value="Tornar-se autor">Tornar-se autor</option>
                      <option value="Pergunta pessoal">Pergunta pessoal</option>
                    </select>
                  </div>
                  <div className="form-group col-12">
                    <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Your Message"></textarea>
                  </div>
                  <div className="form-btn col-12">
                    <button className="th-btn">Enviar agora<i className="fas fa-arrow-up-right ms-2"></i></button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;