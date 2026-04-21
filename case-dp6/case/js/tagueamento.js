document.addEventListener("DOMContentLoaded", function () {

  const page = window.location.href;

  /* PAGE VIEW */
  gtag('event', 'page_view', {
    page_location: page
  });

  /* MENU - ENTRE EM CONTATO */
  const contato = document.querySelector(".menu-lista-contato");

  if (contato) {
    contato.addEventListener("click", function () {
      gtag('event', 'click', {
        page_location: page,
        element_name: 'entre_em_contato',
        element_group: 'menu'
      });
    });
  }

  /* MENU - DOWNLOAD PDF */
  const download = document.querySelector(".menu-lista-download");

  if (download) {
    download.addEventListener("click", function () {
      gtag('event', 'file_download', {
        page_location: page,
        element_name: 'download_pdf',
        element_group: 'menu'
      });
    });
  }

  /* ANALISE - VER MAIS */
  const botoes = document.querySelectorAll(".card-montadoras");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {

      const nome = botao.dataset.name;

      gtag('event', 'click', {
        page_location: page,
        element_name: nome,
        element_group: 'ver_mais'
      });
    });
  });

  /* FORMULÁRIO */
  const form = document.querySelector(".contato");

  if (form) {

    let formStarted = false;

    const inputs = form.querySelectorAll("input");

    inputs.forEach(function (input) {

      input.addEventListener("blur", function () {
        if (!formStarted && input.value.trim() !== "") {
          formStarted = true;

          gtag('event', 'form_start', {
            page_location: page,
            form_id: form.id || 'contato',
            form_name: form.name || 'form_contato',
            form_destination: form.action || 'nao_definido'
          });
        }
      });

    });

    form.addEventListener("submit", function () {

      const btn = form.querySelector("button[type='submit']");

      gtag('event', 'form_submit', {
        page_location: page,
        form_id: form.id || 'contato',
        form_name: form.name || 'form_contato',
        form_destination: form.action || 'nao_definido',
        form_submit_text: btn ? btn.innerText : ''
      });

      setTimeout(() => {
        gtag('event', 'view_form_success', {
          page_location: page,
          form_id: form.id || 'contato',
          form_name: form.name || 'form_contato'
        });
      }, 500);

    });

  }

});