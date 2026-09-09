
"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const btnTema = document.getElementById('btnTema');
    
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('oscuro');
            
            const esOscuro = document.body.classList.contains('oscuro');
            btnTema.innerHTML = esOscuro 
                ? '<i class="fa-solid fa-sun"></i> Modo claro' 
                : '<i class="fa-solid fa-moon"></i> Modo oscuro';
        });
    }

    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    const tarjetasProyecto = document.querySelectorAll('.tarjeta-proyecto');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            boton.classList.add('activo');

            const categoriaFiltro = boton.getAttribute('data-filtro');

            tarjetasProyecto.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

                if (categoriaFiltro === 'todos' || categoriaTarjeta === categoriaFiltro) {
                    tarjeta.style.display = 'flex';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });

    const formulario = document.querySelector("#formularioContacto");
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");
    const resultado = document.querySelector("#resultado");

    const URL_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycbwXPBRUoje58eSVDoHyNdVGYEYg-H_4B-ks1KpG6cQGhPX_NQ3m24bK9jyl_VwXv_BfSg/exec";

    function mostrarError(campo, texto){
      if (!campo) return;
      campo.classList.add("invalido");
      const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
      );
      if (error) {
        error.textContent = texto;
      }
    }

    function limpiarError(campo){
      if (!campo) return;
      campo.classList.remove("invalido");
      const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
      );
      if (error) {
        error.textContent = "";
      }
    }

    
    [nombre, email, mensaje].forEach(campo => {
      if (campo) {
        campo.addEventListener("input", () => {
          if (campo.classList.contains("invalido")) {
            limpiarError(campo);
          }
        });
      }
    });

    if (formulario) {
      formulario.addEventListener("submit", function(evento){
        evento.preventDefault();

        const nombreValor = nombre ? nombre.value.trim() : "";
        const emailValor = email ? email.value.trim() : "";
        const mensajeValor = mensaje ? mensaje.value.trim() : "";

        let formularioValido = true;

        
        if(nombreValor.length < 3){
          mostrarError(nombre, "Por favor ingresa tu nombre completo (mínimo 3 caracteres).");
          formularioValido = false;
        } else {
          limpiarError(nombre);
        }

       
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailValor === "") {
          mostrarError(email, "Por favor ingresa tu correo electrónico.");
          formularioValido = false;
        } else if(!regexEmail.test(emailValor)) {
          mostrarError(email, "Ingresa un formato de correo válido (ej: nombre@dominio.com).");
          formularioValido = false;
        } else {
          limpiarError(email);
        }

       
        if(mensajeValor.length < 10){
          mostrarError(mensaje, "Por favor escribe un mensaje con al menos 10 caracteres.");
          formularioValido = false;
        } else {
          limpiarError(mensaje);
        }

        if(!formularioValido){
          if (resultado) {
            resultado.classList.remove("visible");
          }
          return;
        }

        const botonEnviar = formulario.querySelector("button[type='submit']");
        if (botonEnviar) {
          botonEnviar.disabled = true;
          botonEnviar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        }

        if (resultado) {
          resultado.textContent = "Procesando mensaje, por favor espera...";
          resultado.classList.remove("error");
          resultado.classList.add("visible");
        }

        const datos = {
          nombre: nombreValor,
          email: emailValor,
          mensaje: mensajeValor
        };

        if (URL_APPS_SCRIPT && URL_APPS_SCRIPT.trim() !== "") {
          fetch(URL_APPS_SCRIPT, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(datos)
          })
          .then(() => {
            if (resultado) {
              resultado.textContent = "¡Mensaje enviado con éxito! Amaro te responderá a la brevedad.";
              resultado.classList.remove("error");
              resultado.classList.add("visible");
            }
            formulario.reset();
          })
          .catch(error => {
            console.error("Error al enviar el formulario:", error);
            if (resultado) {
              resultado.textContent = "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.";
              resultado.classList.add("error");
              resultado.classList.add("visible");
            }
          })
          .finally(() => {
            if (botonEnviar) {
              botonEnviar.disabled = false;
              botonEnviar.textContent = "Enviar Mensaje";
            }
          });
        } else {
         
          setTimeout(() => {
            if (resultado) {
              resultado.textContent = `¡Mensaje enviado con éxito! Gracias por comunicarte, Amaro te responderá pronto.`;
              resultado.classList.remove("error");
              resultado.classList.add("visible");
            }
            formulario.reset();
            if (botonEnviar) {
              botonEnviar.disabled = false;
              botonEnviar.textContent = "Enviar Mensaje";
            }
          }, 800);
        }
      });
    }

    const secciones = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let actual = '';

        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop - 100;
            if (window.scrollY >= seccionTop) {
                actual = seccion.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('activo');
            if (link.getAttribute('href') === `#${actual}`) {
                link.classList.add('activo');
            }
        });
    });

    const barraProgreso = document.getElementById('barraProgreso');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && barraProgreso) {
            const porcentaje = (window.scrollY / totalHeight) * 100;
            barraProgreso.style.width = `${porcentaje}%`;
        }
    });

    const btnVolverArriba = document.getElementById('btnVolverArriba');
    if (btnVolverArriba) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnVolverArriba.classList.add('visible');
            } else {
                btnVolverArriba.classList.remove('visible');
            }
        });

        btnVolverArriba.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
